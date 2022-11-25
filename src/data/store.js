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
    ],

    services: [
        {
            icon: 'computer',
            title: 'Audit & Assurance',
            descr: 'Lorem ipsum dolor sit amet consecteur adipiscing ellit.'
        },
        {
            icon: 'business',
            title: 'Financial Advisory',
            descr: 'Lorem ipsum dolor sit amet consecteur adipiscing ellit.'
        },
        {
            icon: 'analytics',
            title: 'Analytics and M&A',
            descr: 'Lorem ipsum dolor sit amet consecteur adipiscing ellit.'
        },
        {
            icon: 'airplane',
            title: 'Middle Marketing',
            descr: 'Lorem ipsum dolor sit amet consecteur adipiscing ellit.'
        },
        {
            icon: 'world',
            title: 'Legal Consulting',
            descr: 'Lorem ipsum dolor sit amet consecteur adipiscing ellit.'
        },
        {
            icon: 'drawer',
            title: 'Regulatory Risk',
            descr: 'Lorem ipsum dolor sit amet consecteur adipiscing ellit.'
        },
    ]
});