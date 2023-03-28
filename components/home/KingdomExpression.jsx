import React from "react";

const KingdomExpression = ({ icon, topic, body }) => {
  return (
    <div>
      <div className="flex justify-center mt-5 mb-2 "> {icon}</div>
      <h2 className="border-l-2 border-yellow-700 text-xl text-yellow-700 text-center">
        {topic}
      </h2>
      {body}
    </div>
  );
};

export default KingdomExpression;
