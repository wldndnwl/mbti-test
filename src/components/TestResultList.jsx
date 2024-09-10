import React from "react";
import TestResultItem from "./TestResultItem";

const TestResultList = ({ results, user, onUpdate, onDelete }) => {
  return (
    <div className="space-y-4">
      {results.map((result) => (
        <TestResultItem
          key={result.id}
          result={result}
          user={user}
          onUpdate={onUpdate}
          onDelete={() => onDelete(result.id)}
        />
      ))}
    </div>
  );
};

export default TestResultList;
