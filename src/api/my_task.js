import { api } from '@/store/api'

export default {

    getData: async function (user_id) {
        return await api.get(`/task/get-my-task?user_id=${user_id}`)
    },
    getEstimateBreakDown: async function (task) {
        return await api.get(`/task/total-estimate-by-task?task=${task}`)
    },
    getDataForFilter: async function (user_id, status) {
        return await api.get(`/task/get-my-task?user_id=${user_id}&type=${status}`)
    },
    getChildList: async function (user_id) {
        return await api.get(`/task/get-child-for-supervisor?supervisor=${user_id}`)
    },

    create: async function (payload) {
        return await api.post(`/task/create_task`, payload)
    },

    delete: async function (user_id, task_id) {
        return await api.put(`/task/delete-task?user_id=${user_id}&task_id=${task_id}`)
    },

    updateNotApplicable: async function (user_id, task_id, supervisor) {
        return await api.put(`/task/update-not-applicable?user_id=${user_id}&task_id=${task_id}&is_supervisor=${supervisor}`)
    },

    deleteBySupervisor: async function (user_id, task_id) {
        return await api.put(`/task/delete-task-supervisor?user_id=${user_id}&task_id=${task_id}`)
    },
    revertBySupervisor: async function (user_id, task_id) {
        return await api.put(`/task/revert-task-supervisor?user_id=${user_id}&task_id=${task_id}`)
    },
    update: async function (payload, user_id, task_id) {
        return await api.post(`/task/edit_task?task_id=${task_id}&user_id=${user_id}`, payload)
    },

    getTaskData: async function (user_id, task_id) {
        return await api.get(`/task/get-my-task-by-id?user_id=${user_id}&task=${task_id}`)
    },

    taskLogin: async function (email, id) {
        return await api.get(`/task/login?email=${email}&id=${id}`)
    },
    getCompletedTaskByDay: async function (id) {
        return await api.get(`/task/get-completed-task-count?id=${id}`)
    },
    getLastSevenDay: async function (id) {
        return await api.get(`/task/get-last-seven-days-count?id=${id}`)
    },
    getLastFourDue: async function (id) {
        return await api.get(`/task/get-last-due-four?id=${id}`)
    },
    getSupportTracker: async function (id) {
        return await api.get(`/task/total-story-points-per-day?id=${id}`)
    },
    getIsSupervisorPendingTaskCount: async function (id) {
        return await api.get(`/task/review-needed?supervisor_id=${id}`)
    },

    getPayrollAllConfig: async function (user_id) {
        return await api.get(`payroll/payroll-people-config-get-all`)
    },
    updateStatus: async function (task_id, status) {
        return await api.put(`payroll/update-status/${task_id}/${status}`)
    },
    addAdvance: async function (id, value) {
        return await api.put(`payroll/add-advance/${id}/${value}`)
    },
    getPayRollInfo: async function (id) {
        return await api.get(`payroll/get-payroll-pdf-info/${id}`)
    },
    getAttendanceByIDForMonth: async function (id) {
        return await api.get(`attendance/get-attendance-by-id-for-pdf/${id}`)
    },
    processOtLate: async function () {
        return await api.get(`attendance/process-ot/1/1`)
    },
    getDailyTaskCount: async function (id) {
        return await api.get(`task/get-daily-task-count/${id}`)
    },
    getPerformanceById: async function (id) {
        return await api.get(`performance/get-performance-by-id/${id}` )
    },
}

