import { useRouter } from "next/router";
import { Fragment } from "react";

import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function EventsParamsPage(){
    const router = useRouter();
    const filterData = router.query.params;

    if(!filterData){
        return <p className="center">Loading...</p>    
    }

    const numYear = +filterData[0];
    const numMonth = +filterData[1];

    if(isNaN(numYear) || isNaN(numMonth) || numMonth > 12 || numMonth < 1){
        return (
            <Fragment>
              <ErrorAlert>
                <p>Invalid filter. Please adjust your values!</p>
              </ErrorAlert>
              <div className='center'>
                <Button link='/events'>Show All Events</Button>
              </div>
            </Fragment>
          );    }


    const filterdEvents = getFilteredEvents({year: numYear ,month: numMonth});

    

    if (!filterdEvents || filterdEvents.length === 0) {
        return (
          <Fragment>
            <ErrorAlert>
              <p>No events found for the chosen filter!</p>
            </ErrorAlert>
            <div className='center'>
              <Button link='/events'>Show All Events</Button>
            </div>
          </Fragment>
        );
      }

    return (
        <Fragment>
            <ResultsTitle date = {new Date(numYear , numMonth - 1)}/>
            <EventList items = {filterdEvents}/>
        </Fragment>
    );
}

export default EventsParamsPage