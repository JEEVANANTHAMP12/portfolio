import React from 'react';
import { Routes, Route } from 'react-router-dom';

const AppRoutes = ({ HomeContent }) => (
    <Routes>
        <Route path="/" element={<HomeContent />} />
    </Routes>
);

export default AppRoutes;
