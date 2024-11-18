const ErrorPage = ({ message }) => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center p-10 bg-white shadow-lg rounded-lg">
          <h2 className="text-5xl font-bold text-red-500">Page Not Found</h2>
          <p className="text-lg text-gray-600 mt-4">{message}</p>
        </div>
      </div>
    );
  };
  
  export default ErrorPage;
  