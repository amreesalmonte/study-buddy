import React from 'react';
import ProjectsView from '../views/ProjectsView';
import PomodoroView from '../views/PomodoroView';
import FlashcardsView from '../views/FlashcardsView';
import { Folder, Article, Timer } from '@mui/icons-material';

export const RouteConfig = [
    {
        title: 'flashcards',
        element: <FlashcardsView />,
        path: '/flashcards',
        icon: <Article />
    },
    {
        title: 'pomodoro',
        element: <PomodoroView />,
        path: '/',
        icon: <Timer />
    },
    {
        title: 'projects',
        element: <ProjectsView />,
        path: '/projects',
        icon: <Folder />
    }
]