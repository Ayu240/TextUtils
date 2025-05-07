import React from 'react';

function Alert(props) {
  const capitalize = (word) => {
    if (!word) return '';
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const getAlertClasses = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 text-green-800 border-green-400';
      case 'error':
        return 'bg-red-100 text-red-800 border-red-400';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800 border-yellow-400';
      case 'info':
        return 'bg-blue-100 text-blue-800 border-blue-400';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-400';
    }
  };

  return (
    props.alert && (
      <div
        className={`border-l-4 p-4 mb-4 rounded-md ${getAlertClasses(props.alert.type)}`}
        role="alert"
      >
        <strong className="font-medium">{capitalize(props.alert.type)}:</strong> {props.alert.msg}
      </div>
    )
  );
}

export default Alert;
