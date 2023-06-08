import Alert from "react-bootstrap/Alert";

function AlertComponent({ content }) {
  return (
    <>
      {[
        "success",
        // "primary",
        // "secondary",
        // "danger",
        // "warning",
        // "info",
        // "light",
        // "dark",
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          {content}
          {/* Congratulations on your successful purchase! */}
        </Alert>
      ))}
    </>
  );
}

export default AlertComponent;
