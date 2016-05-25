angular.module('markate')
.service('UserService', function() {
    var self = this;

    this.setUser = function(data) {
        console.log("service :", data.user_data)
        window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('user_id', data.user_data.user_id);
        window.localStorage.setItem('full_name', data.user_data.full_name);
        window.localStorage.setItem('user_email', data.user_data.user_email);
        window.localStorage.setItem('user_description', data.user_data.user_description);
        window.localStorage.setItem('role_id', data.user_data.role_id);
        window.localStorage.setItem('role_name', data.user_data.role_name);
        window.localStorage.setItem('promo_id', data.user_data.promo_id);
        window.localStorage.setItem('address', data.user_data.address);
        window.localStorage.setItem('activated', data.user_data.activated);
        window.localStorage.setItem('area_city', data.user_data.area_city);
        window.localStorage.setItem('user_phone', data.user_data.user_phone);
        window.localStorage.setItem('area_state', data.user_data.area_state);
        window.localStorage.setItem('count_completed_jobs', data.user_data.count_completed_jobs);
        window.localStorage.setItem('count_jobs', data.user_data.count_jobs);
        window.localStorage.setItem('date_created', data.user_data.date_created);
        window.localStorage.setItem('email_activated', data.user_data.email_activated);
        window.localStorage.setItem('email_activated_date', data.user_data.email_activated_date);
        window.localStorage.setItem('wallpaper', data.user_data.wallpaper);
        window.localStorage.setItem('user_zipcode', data.user_data.user_zipcode);
        window.localStorage.setItem('user_state', data.user_data.user_state);
        window.localStorage.setItem('user_slug', data.user_data.user_slug);
        window.localStorage.setItem('user_longitude', data.user_data.user_longitude);
        window.localStorage.setItem('user_latitude', data.user_data.user_latitude);
        window.localStorage.setItem('rating', data.user_data.rating);
        window.localStorage.setItem('profile_pic_name', data.user_data.profile_pic_name);
        window.localStorage.setItem('phone_activated', data.user_data.phone_activated);
        window.localStorage.setItem('phone_activated_date', data.user_data.phone_activated_date);
        window.localStorage.setItem('oauth_provider', data.user_data.oauth_provider);
        window.localStorage.setItem('oauth_id', data.user_data.oauth_id);
        window.localStorage.setItem('is_completed', data.user_data.is_completed);

    };

    this.getUser = function() {
        return {
            token               : window.localStorage.getItem('token'),
            user_id             : window.localStorage.getItem('user_id'),
            full_name           : window.localStorage.getItem('full_name'),
            user_email          : window.localStorage.getItem('user_email'),
            user_description    : window.localStorage.getItem('user_description'),
            role_id             : window.localStorage.getItem('role_id'),
            role_name           : window.localStorage.getItem('role_name'),
            promo_id            : window.localStorage.getItem('promo_id'),
            address             : window.localStorage.getItem('address'),
            activated           : window.localStorage.getItem('activated'),
            area_city           : window.localStorage.getItem('area_city'),
            area_state          : window.localStorage.getItem('area_state'),
            count_completed_jobs    : window.localStorage.getItem('count_completed_jobs'),
            count_jobs          : window.localStorage.getItem('count_jobs'),
            date_created        : window.localStorage.getItem('date_created'),
            email_activated     : window.localStorage.getItem('email_activated'),
            email_activated_date    : window.localStorage.getItem('email_activated_date'),
            wallpaper           : window.localStorage.getItem('wallpaper'),
            user_zipcode        : window.localStorage.getItem('user_zipcode'),
            user_state          : window.localStorage.getItem('user_state'),
            user_city           : window.localStorage.getItem('user_city'),
            user_slug           : window.localStorage.getItem('user_slug'),
            user_longitude      : window.localStorage.getItem('user_longitude'),
            user_latitude       : window.localStorage.getItem('user_latitude'),
            user_phone          : window.localStorage.getItem('user_phone'),
            rating              : window.localStorage.getItem('rating'),
            profile_pic_name    : window.localStorage.getItem('profile_pic_name'),
            phone_activated     : window.localStorage.getItem('phone_activated'),
            phone_activated_date    : window.localStorage.getItem('phone_activated_date'),
            oauth_provider      : window.localStorage.getItem('oauth_provider'),
            oauth_id            : window.localStorage.getItem('oauth_id'),
            is_completed        : window.localStorage.getItem('is_completed')


        };
    };
});