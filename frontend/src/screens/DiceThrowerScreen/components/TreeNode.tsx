import React from 'react'

const TreeNode = ({ node }:any) => {
    if (!node) return null;
  
    return (
        <span className="inline-flex items-center bg-blue-200 text-blue-800 text-sm font-semibold px-2 py-1 rounded-full mr-2">
          {node.value}
          {node.next && <span className="text-gray-500"> {"-> "} <TreeNode node={node.next} /></span>}
        </span>
    );
};

export default TreeNode