import { reactive } from 'vue'

export const store = reactive({
    menu: ['HOME', 'ABOUT','SERVICES','TEAM','BLOG'],
    results: [
        {
            number: 128,
            title: 'Certifications'
        },
        {
            number: 230,
            title: 'Employees'
        },
        {
            number: 517,
            title: 'Customers'
        },
        {
            number: 94,
            title: 'Countries Served'
        },
    ]
});