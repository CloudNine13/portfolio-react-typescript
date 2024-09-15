import React, { memo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from 'utils';
import { MainLayout } from 'components';
import NotFound from './NotFound';

const AboutMe = () => import('./AboutMe');

const Router = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<Navigate to={PATHS.ABOUT_ME} replace />} />
        <Route path={PATHS.ABOUT_ME} element={<MainLayout loader={AboutMe} />} />
        <Route path={PATHS.EVERYWHERE_ELSE} element={<Navigate to={PATHS.NOT_FOUND} replace />} />
        <Route path={PATHS.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
});

export { Router };
