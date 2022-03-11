import React from 'react';
import ProjectsListView from '../views/ProjectsListView';
import PomodoroView from '../views/PomodoroView';
import FlashcardsListView from '../views/FlashcardsListView';
import { Folder, Article, Timer } from '@mui/icons-material';

export const RouteConfig = [
    {
        title: 'flashcards',
        element: <FlashcardsListView />,
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
        element: <ProjectsListView />,
        path: '/projects',
        icon: <Folder />
    }
]