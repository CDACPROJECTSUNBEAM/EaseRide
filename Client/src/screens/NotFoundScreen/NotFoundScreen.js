import React from "react";
import "./NotFoundScreen.css";
import { Link } from "react-router-dom";

export default function NotFoundScreen() {
  return (
    <>
      <div class="page-not-found pt-5">
        <div class="bg-light shadow">
          <h2>
            4<i class="fa fa-bug" aria-hidden="true"></i>4
          </h2>
          <h3 class="mt-4">Oops! Page Not Found</h3>
          <div class="mt-5">
            <Link to="/">
            <button type="button" class="btn m-2 m-md-0 btn-primary">
              <i class="bi bi-house-door-fill"></i> Back Home
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
