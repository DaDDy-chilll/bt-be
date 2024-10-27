
enum USER {
    HOME_PAGE = "/:modal?",
    COURSES_PAGE = "/courses",
    COURSE_DETAIL_PAGE = "/courses/:id",
    BLOG_PAGE='/blogs',
    COURSE_OWN_PAGE = "/courses/:id/own",
    COURSE_OWN_ASSIGNMENT_PAGE = "/courses/:id/own/:assignmentId",
    INSTRUCTOR_PAGE = '/instructors',
    INSTRUCTOR_DETAIL_PAGE = '/instructors/:id',
    CONTACT_US_PAGE = '/contactus',
    PRIVACY_POLICY_PAGE = '/privacy-policy',
    NOT_FOUND_ERROR = '/404',
    SERVER_ERROR = '/500'
}

export default { USER };