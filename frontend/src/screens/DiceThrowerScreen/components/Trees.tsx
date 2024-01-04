import React from 'react'
import TreeNode from './TreeNode';

const Trees = ({ trees }:any) => {
    return (
      <div>
        {trees.map((tree:any) => (
          <div key={tree._id} className="p-4 border border-gray-200 rounded-lg shadow">
          <TreeNode node={tree.tree} />
        </div>
        ))}
      </div>
    );
  };

export default Trees
