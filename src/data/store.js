import { reactive } from 'vue'

export const store = reactive({
    // first menu in jumbotron
    menu: ['HOME', 'ABOUT','SERVICES','TEAM','BLOG'],

    // data in results component
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

    // data for services cards
    services: [
        {
            icon: 'computer.svg',
            title: 'Audit & Assurance',
            descr: 'Lorem ipsum dolor sit amet consecteur adipiscing ellit.'
        },
        {
            icon: 'business.svg',
            title: 'Financial Advisory',
            descr: 'Lorem ipsum dolor sit amet consecteur adipiscing ellit.'
        },
        {
            icon: 'analytics.svg',
            title: 'Analytics and M&A',
            descr: 'Lorem ipsum dolor sit amet consecteur adipiscing ellit.'
        },
        {
            icon: 'airplane.svg',
            title: 'Middle Marketing',
            descr: 'Lorem ipsum dolor sit amet consecteur adipiscing ellit.'
        },
        {
            icon: 'world.svg',
            title: 'Legal Consulting',
            descr: 'Lorem ipsum dolor sit amet consecteur adipiscing ellit.'
        },
        {
            icon: 'drawer.svg',
            title: 'Regulatory Risk',
            descr: 'Lorem ipsum dolor sit amet consecteur adipiscing ellit.'
        },
    ],

    // data for team cards
    team: [
        {
            image: 'team-1.jpg',
            name: 'David Cooper',
            role: 'CTO & CO-FOUNDER'
        },
        {
            image: 'team-3.jpg',
            name: 'Oliver Jones',
            role: 'CHIEF PROCUREMENT'
        },
        {
            image: 'team-2.jpg',
            name: 'Emma Lopez',
            role: 'CHIEF MARKETING'
        },
        {
            image: 'team-4.jpg',
            name: 'T. Johnson',
            role: 'CEO & PRESIDENT'
        }
    ],

    // obj with 3 array for footer menu
    footerMenu: {
        about: ['The Company', 'Institutional', 'Social & Events', 'Innovation', 'Environment', 'Technology'],

        services: ['Audit & Assurance', 'Financial Advisory', 'Analytics M&A', 'Middle Marketing', 'Legal Consulting', 'Regulatory Risk'],

        support: ['Responsibility', 'Terms of Use', 'About Cookies', 'Privacy Policy', 'Accessibility', 'Information']
    }
});