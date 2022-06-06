import LayoutComponent from '../components/commons/LayoutComponent';
import LayoutWeb from '../components/commons/LayoutWeb';
import Account from '../components/containers/Account/Account';
import Bank from '../components/containers/Bank/Bank';
import Campaigns from '../components/containers/Campaigns/Campaigns';
import Dashboard from '../components/containers/Dashboard/Dashboard';
import AnswerSheets from '../components/containers/Statistic/AnswerSheets/AnswerSheets';
import ListStatistic from '../components/containers/Statistic/ListStatistic/ListStatistic';
import ResultsStatistic from '../components/containers/Statistic/ResultsStatistic/ResultsStatistic';
import Statistic from '../components/containers/Statistic/Statistic';
import TestEdit from '../components/containers/Test/TestEdit/TestEdit';
import TestResult from '../components/containers/Test/TestResult/TestResult';
import Tests from '../components/containers/Test/TestRoute/Tests';
import CreateCampaign from '../components/containers/TestCampaigns/CreateCampaign/CreateCampaign';
import Preview from '../components/containers/TestCampaigns/CreateCampaign/Preview/Preview';
import QuestionStatistic from '../components/containers/TestCampaigns/QuestionStatistic/QuestionStatistic';
import ResultCampaign from '../components/containers/TestCampaigns/ResultCampaign/ResultCampaign';
import TestCampaigns from '../components/containers/TestCampaigns/TestCampaigns';
import TestCategory from '../components/containers/TestCategories/TestCategory';

export const routes = [
  {
    path: '/',
    element: <LayoutWeb />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: '/test-categories',
        element: <TestCategory />,
      },
      {
        path: '/question-tags',
        element: <TestCategory />,
      },
      {
        path: '/tests',
        element: <LayoutComponent />,
        children: [
          { index: true, element: <Tests /> },
          {
            path: '/tests/:id/edit',
            element: <TestEdit />,
          },
          {
            path: '/tests/:id/result',
            element: <TestResult />,
          },
        ],
      },
      {
        path: 'results/:id',
        element: <ResultsStatistic />,
      },
      {
        path: '/test-campaigns',
        element: <LayoutComponent />,
        children: [
          { index: true, element: <TestCampaigns /> },
          {
            path: '/test-campaigns/create',
            element: <CreateCampaign />,
          },
          {
            path: '/test-campaigns/:id/result',
            element: <ResultCampaign />,
          },
          {
            path: '/test-campaigns/:id/edit',
            element: <Preview />,
          },
          {
            path: '/test-campaigns/:id/question-statistic',
            element: <QuestionStatistic />,
          },
        ],
      },

      {
        path: 'results/:id',
        element: <ResultsStatistic />,
      },
      {
        path: '/bank',
        element: <Bank />,
      },
      {
        path: '/campaigns',
        element: <Campaigns />,
      },
      {
        path: '/statistic',
        element: <Statistic />,
        children: [
          {
            path: '/statistic/campaigns',
            element: <ListStatistic />,
          },
          {
            path: '/statistic/tests',
            element: <ListStatistic />,
          },
          {
            path: '/statistic/answer-sheets',
            element: <AnswerSheets />,
          },
        ],
      },

      {
        path: '/account',
        element: <Account />,
      },
    ],
  },
];

// config router https://stackblitz.com/github/remix-run/react-router/tree/main/examples/route-objects?file=src%2FApp.tsx
