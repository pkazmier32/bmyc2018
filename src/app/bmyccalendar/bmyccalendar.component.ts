import {  Component,  ChangeDetectionStrategy,  ViewChild,  TemplateRef, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  startOfDay,  endOfDay,  subDays,  addDays,  endOfMonth,  isSameDay,  isSameMonth,  addHours} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-bmyccalendar',
  templateUrl: './bmyccalendar.component.html',
  styleUrls: ['./bmyccalendar.component.css']
})
export class BmyccalendarComponent implements OnInit {


  ngOnInit() {
  }

  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: (new Date('July 6, 2019')),
      end: (new Date('July 7, 2019')),
      title: 'Norm Tanner Invitational Regatta',
      color: colors.red,
      actions: this.actions,
      allDay: true
    },
    {
      start: (new Date('February 4, 2019 19:00:00 -0700')),
      end: (new Date('February 4, 2019 21:00:00 -0700')),
      title: 'BMYC Officers Meeting ',
      color: colors.yellow,
      actions: this.actions,
      meta: 'Bakers home'
    },
    {
      start: (new Date('March 4, 2019 19:00:00 -0700')),
      end: (new Date('March 4, 2019 21:00:00 -0700')),
      title: 'BMYC Officers Meeting ',
      color: colors.yellow,
      actions: this.actions,
      meta: 'Bakers home'
    },
    {
      start: (new Date('April 1, 2019 19:00:00 -0600')),
      end: (new Date('April 1, 2019 21:00:00 -0600')),
      title: 'BMYC Officers Meeting ',
      color: colors.yellow,
      actions: this.actions,
      meta: 'Bakers home'
    },
    {
      start: (new Date('May 6, 2019 19:00:00 -0600')),
      end: (new Date('May 6, 2019 21:00:00 -0600')),
      title: 'BMYC Officers Meeting ',
      color: colors.yellow,
      actions: this.actions,
      meta: 'Bakers home'
    },
    {
      start: (new Date('June 3, 2019 19:00:00 -0600')),
      end: (new Date('June 3, 2019 21:00:00 -0600')),
      title: 'BMYC Officers Meeting ',
      color: colors.yellow,
      actions: this.actions,
      meta: 'Bakers home'
    },
    {
      start: (new Date('July 1, 2019 19:00:00 -0600')),
      end: (new Date('July 1, 2019 21:00:00 -0600')),
      title: 'BMYC Officers Meeting ',
      color: colors.yellow,
      actions: this.actions,
      meta: 'Bakers home'
    },
    {
      start: (new Date('August 5, 2019 19:00:00 -0600')),
      end: (new Date('August 5, 2019 21:00:00 -0600')),
      title: 'BMYC Officers Meeting ',
      color: colors.yellow,
      actions: this.actions,
      meta: 'Bakers home'
    },
    {
      start: (new Date('September 2, 2019 19:00:00 -0600')),
      end: (new Date('September 2, 2019 21:00:00 -0600')),
      title: 'BMYC Officers Meeting ',
      color: colors.yellow,
      actions: this.actions,
      meta: 'Bakers home'
    },
    {
      start: (new Date('May 26, 2019 13:30:00 -0600')),
      end: (new Date('May 26, 2019 17:00:00 -0600')),
      title: 'Opening Day - Sunday Club Races ',
      color: colors.blue,
      actions: this.actions
    },
    {
      start: (new Date('June 2, 2019 13:30:00 -0600')),
      end: (new Date('June 2, 2019 17:00:00 -0600')),
      title: 'Sunday Club Races ',
      color: colors.blue,
      actions: this.actions
    },
    {
      start: (new Date('June 9, 2019 13:30:00 -0600')),
      end: (new Date('June 9, 2019 17:00:00 -0600')),
      title: 'Sunday Club Races ',
      color: colors.blue,
      actions: this.actions
    },
    {
      start: (new Date('June 16, 2019 13:30:00 -0600')),
      end: (new Date('June 16, 2019 17:00:00 -0600')),
      title: 'Sunday Club Races ',
      color: colors.blue,
      actions: this.actions
    },
    {
      start: (new Date('June 23, 2019 13:30:00 -0600')),
      end: (new Date('June 23, 2019 17:00:00 -0600')),
      title: 'Sunday Club Races ',
      color: colors.blue,
      actions: this.actions
    },
    {
      start: (new Date('June 30, 2019 13:30:00 -0600')),
      end: (new Date('June 30, 2019 17:00:00 -0600')),
      title: 'Sunday Club Races ',
      color: colors.blue,
      actions: this.actions
    },
    {
      start: (new Date('July 14, 2019 13:30:00 -0600')),
      end: (new Date('July 14, 2019 17:00:00 -0600')),
      title: 'Sunday Club Races ',
      color: colors.blue,
      actions: this.actions
    },
    {
      start: (new Date('July 21, 2019 13:30:00 -0600')),
      end: (new Date('July 21, 2019 17:00:00 -0600')),
      title: 'Sunday Club Races ',
      color: colors.blue,
      actions: this.actions
    },
    {
      start: (new Date('July 28, 2019 13:30:00 -0600')),
      end: (new Date('July 28, 2019 17:00:00 -0600')),
      title: 'Sunday Club Races ',
      color: colors.blue,
      actions: this.actions
    },
    {
      start: (new Date('August 4, 2019 13:30:00 -0600')),
      end: (new Date('August 4, 2019 17:00:00 -0600')),
      title: 'Sunday Club Races ',
      color: colors.blue,
      actions: this.actions
    },
    {
      start: (new Date('August 11, 2019 13:30:00 -0600')),
      end: (new Date('August 11, 2019 17:00:00 -0600')),
      title: 'Sunday Club Races ',
      color: colors.blue,
      actions: this.actions
    },
    {
      start: (new Date('August 18, 2019 13:30:00 -0600')),
      end: (new Date('August 18, 2019 17:00:00 -0600')),
      title: 'Sunday Club Races ',
      color: colors.blue,
      actions: this.actions
    },
    {
      start: (new Date('August 25, 2019 13:30:00 -0600')),
      end: (new Date('August 25, 2019 17:00:00 -0600')),
      title: 'Sunday Club Races ',
      color: colors.blue,
      actions: this.actions
    },
    {
      start: (new Date('September 1, 2019 13:30:00 -0600')),
      end: (new Date('September 1, 2019 17:00:00 -0600')),
      title: 'Sunday Club Races ',
      color: colors.blue,
      actions: this.actions
    },
  ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }

}
