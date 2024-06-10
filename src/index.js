import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/home";
import Profile from "./component/profile";
import SearchResult from "./component/search_result";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <StrictMode>
            <BrowserRouter>
                    <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/search-result" element={<SearchResult />} />
                    </Routes>
            </BrowserRouter>
    </StrictMode>
);
