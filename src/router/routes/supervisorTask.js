export default[
    {
        path: '/apps/supervisorTask',
        name: 'apps-supervisorTask',
        component: () => import('@/views/supervisorTask/vue-good-table/GoodTable.vue'),
        meta: {
            pageTitle: 'Supervisor Task',
        },
    },
    {
        path: '/apps/supervisorTask/createMyTask',
        name: 'createMyTask',
        component: () => import('@/views/myTask/createMyTask'),
        meta: {
            pageTitle: 'Create My Task',
        },
    },
    {
        path: '/apps/supervisorTask/editSupervisorTask/:task_id/:user_id',
        name: 'editSupervisorTask',
        component: () => import('@/views/supervisorTask/editSupervisorTask'),
        meta: {
            pageTitle: 'Edit Supervisor Task',
        },
    },
    {
        path: '/apps/leaves',
        name: 'apps-leaves',
        component: () => import('@/views/leaves/GoodTable'),
        meta: {
            pageTitle: 'Leaves',
        },
    },
    {
        path: '/apps/leaves/add',
        name: 'apps-leaves-add',
        component: () => import('@/views/leaves/form-repeater/FormRepeaterBasic'),
        meta: {
            pageTitle: 'Add My Leaves',
        },
    }
]
