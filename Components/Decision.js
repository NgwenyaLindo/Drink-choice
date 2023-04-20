import React from 'react';

function Decision(props) {
  const { decision } = props;

  return (
    <div>
      <h2>Decision</h2>
      <p>Choice: {decision.choice}</p>
      <p>Confidence: {decision.confidence}</p>
    </div>
  );
}

export default Decision;
