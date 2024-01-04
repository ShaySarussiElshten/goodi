const axios = require('axios');
const { Mutex } = require('async-mutex');

const mutex = new Mutex();
let completedRequests = 0;
const totalRequests = 50;
const results = [];

const logProgress = async () => {
  const release = await mutex.acquire();
  try {
    completedRequests++;
    const percentage = (completedRequests / totalRequests) * 100;
    console.log(`Completed Requests: ${completedRequests}/${totalRequests} (${percentage.toFixed(2)}%)`);
  } finally {
    release();
  }
};

const makeRequest = async () => {
  const id = Math.floor(Math.random() * 1000) + 1;
  try {
    const response = await axios.post(`http://localhost:60100/dice/throw/${id}`);
    const result = { success: true, userId: id, statusCode: response.status };
    results.push(result);
    await logProgress();
    return result;
  } catch (error) {
    const result = { success: false, userId: id, error: error.message };
    results.push(result);
    await logProgress();
    return result;
  }
};

const requests = Array.from({ length: totalRequests }, makeRequest);

Promise.all(requests)
  .then(() => {
    console.log('All requests have been processed');

    const successfulResponses = results.filter(result => result.success);
    const successRate = (successfulResponses.length / totalRequests) * 100;
    
    console.log(`\nSuccess Rate: ${successRate.toFixed(2)}%`);
    console.log(`Total Requests: ${totalRequests}`);
    console.log(`Successful Requests: ${successfulResponses.length}`);
    console.log(`Failed Requests: ${totalRequests - successfulResponses.length}`);

  })
  .catch(error => console.error('An error occurred:', error));