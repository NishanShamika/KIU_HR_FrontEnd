import { getUserData } from "@/auth/utils";


const userData = getUserData();
const userId = userData.id;

const kuiPages= [
  {
    header: 'Pages',
  },
  {
    title: 'My Task',
    route: 'apps-myTask',
    icon: 'BookOpenIcon',
  },
  {
    title: 'My Task Breakdown',
    route: 'apps-myDailyCount',
    icon: 'BookOpenIcon',
  },
  {
    title: 'Supervisor Task',
    route: 'apps-supervisorTask',
    icon: 'BookIcon',
  },
  {
    title: 'Attendance',
    route: 'apps-attendance',
    icon: 'CheckCircleIcon',
  },
  {
    title: 'Supervisor Attendance',
    route: 'apps-supervisor-attendance',
    icon: 'CheckCircleIcon',
  },
  {
    title: 'Add My Leaves',
    route: 'apps-leaves-add',
    icon: 'FilePlusIcon',
  },
  {
    title: 'Leaves',
    route: 'apps-leaves',
    icon: 'FileTextIcon',
  },
  {
    title: 'My Leave Balance',
    route: 'apps-leaves-available',
    icon: 'FileIcon',
  },
  {
    title: 'Supervisor Leave',
    route: 'apps-supervisorLeave',
    icon: 'ClipboardIcon',
  },
  {
    title: 'My Roster',
    route: 'apps-myRoster',
    icon: 'CalendarIcon',
  },
  {
    title: 'Supervisor Roster',
    route: 'apps-supervisorRoster',
    icon: 'CalendarIcon',
  },
  {
    title: 'My Penalty',
    route: 'apps-my-penalty',
    icon: 'FileIcon',
  },
  {
    title: 'My Over Time',
    route: 'apps-my-over-time',
    icon: 'FileIcon',
  },
  {
    title: 'My Pay Slips',
    route: 'apps-invoice-list',
    icon: 'FileIcon',
  },
  {
    title: 'Process Pay Slips',
    route: 'apps-processPayslip',
    icon: 'FileIcon',
  },
  {
    title: 'Process Daily Config',
    route: 'apps-process-daily-config',
    icon: 'FileIcon',
  },
  {
    title: 'Process Minor Staff',
    route: 'apps-minor-staff',
    icon: 'FileIcon',
  },
  {
    title: 'Admin',
    route: 'admin-list',
    icon: 'FileIcon',
  },
  
]

if (userId === 825) {
  kuiPages.push(
    {
      header: 'Settings',
    },
    {
    title: 'Add Emp Leaves',
    route: 'apps-leaves-add-employees',
    icon: 'FilePlusIcon',
  });
}

export default kuiPages;