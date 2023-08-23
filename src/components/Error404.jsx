import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";

const Error404 = () => {
  useEffect(() => {
    document.title = "Error 404: MyTinerary";
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <section className="text-center mb-8">
        <h1 className="text-3xl font-semibold">
          ERROR <span className="text-red-500">404</span>
        </h1>
        <h3 className="text-lg">Sorry, the page you´re looking for doesn´t exist</h3>
        <NavLink to="/" className="text-gray-600 hover:text-gray-800">
          <button className="mt-4 px-4 py-2 border rounded border-gray-400 hover:border-gray-600 bg-transparent cursor-pointer">
            Go Back Home
          </button>
        </NavLink>
      </section>
      <aside className="min-h-20 h-40 flex justify-center">
        <div className="border-2 border-dashed border-gray-800 p-4 rounded">
          <p className="text-gray-600">AÑADIR IMAGEN!!!</p>
        </div>
      </aside>
    </main>
  );
};

export default Error404;