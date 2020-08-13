// Absolute imports
import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Loaders
import Home from '@components/Home/Loadable'
//General tab
import Recent from '@components/Recent/Loadable'
import MostPopular from '@components/MostPopular/Loadable'
import Archive from '@components/Archive/Loadable'
import Uploads from '@components/Uploads/Loadable'
import Donate from '@components/Donate/Loadable'
import Info from '@components/Info/Loadable'
// Ratings tab
import DailyRating from '@components/DailyRating/Loadable'
import WeeklyRating from '@components/WeeklyRating/Loadable'
import MonthlyRating from '@components/MonthlyRating/Loadable'
import YearlyRating from '@components/YearlyRating/Loadable'
import CustomRating from '@components/CustomRating/Loadable'
import Averages from '@components/Averages/Loadable'
// Search tab
import Search from '@components/Search/Loadable'
// Dev test tab
import Main from '@components/Main/Loadable'
import APIPage from '@components/APIPage/Loadable'
//
import Text from '@components/Text/Loadable'
import NotFound from '@components/NotFound/Loadable'


export default () => (
    <Switch>
        {/* Home */}
        <Route exact path='/' component={Home} />

        {/* General */}
        <Route path='/recent' component={Recent} />
        <Route path='/popular' component={MostPopular} />
        <Route path='/archive' component={Archive} />
        <Route path='/uploads' component={Uploads} />
        <Route path='/donate' component={Donate} />
        <Route path='/info' component={Info} />

        {/* Ratings */}
        <Route path='/daily-rating' component={DailyRating} />
        <Route path='/weekly-rating' component={WeeklyRating} />
        <Route path='/monthly-rating' component={MonthlyRating} />
        <Route path='/yearly-rating' component={YearlyRating} />
        <Route path='/custom-rating' component={CustomRating} />
        <Route path='/averages' component={Averages} />

        {/* Search */}
        <Route path='/search' component={Search} />

        {/* Dev test */}
        <Route path='/main' component={Main} />       
        <Route path='/api' component={APIPage} />

        <Route path="/text/:textId" component={Text} />
        <Route path='*' component={NotFound} />
    </Switch>
);