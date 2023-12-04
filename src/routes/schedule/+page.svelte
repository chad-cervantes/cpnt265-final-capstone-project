<script>
  import { Calendar } from '@fullcalendar/core';
  import timeGridPlugin from '@fullcalendar/timegrid';
  import dayGridPlugin from '@fullcalendar/daygrid';
  import listPlugin from '@fullcalendar/list';
  import interactionPlugin from '@fullcalendar/interaction';
  import multiMonthPlugin from '@fullcalendar/multimonth';
  import { onMount } from 'svelte';
  
  onMount(() => {
  const calendarEl = document.getElementById('calendar');

  let calendar = new Calendar(calendarEl, {
  plugins: [ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin, multiMonthPlugin ],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,listWeek'
  },
  events: [
    {
      id: '1',
      title  : 'West African Dance',
      start  : '2023-12-08',
      end: '2023-12-09',
      allDay : false,
      startTime: '18:00:00',
      endTime: '19:00:00',
    },
    {
      id: '2',
      title  : 'Hip Hop Dance',
      start  : '2023-12-16',
      allDay : false,
      startTime: '18:00:00',
    },
    {
      id: '3',
      title  : 'Contemporary Dance',
      start  : '2023-12-21',
      allDay : false,
      startTime: '18:00:00',
    }
  ]
  });

  calendar.render();
  });
</script>

<div id="calendar"></div>

