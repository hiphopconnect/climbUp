export const Hall_Owner  = Object.freeze({
    create_climbing_hall_and_owner: {
        call: `CALL climbup.create_climbing_hall_and_owner($1, $2, $3, $4, $5, $6)`,
        values: ['Testhall', 'Musterstraße 123', '12345', 'Beispielstadt', 'Testhall', 'Testhall@example.com']
    }, 
    verify_hallowner_credentials_name_pw: {
        call: `SELECT verify_hallowner_credentials(_user_name => $1, _hashed_password => $2)`,
        values: ['username', 'password'],
    },
    verify_hallowner_credentials_email_pw: {
        call: `SELECT verify_hallowner_credentials(_hashed_password => $1, _email_address => $2)`,
        values: ['email', 'password'],
    },
    verify_hallowner_email_exists: {
        call: `SELECT verify_hallowner_email_exists($1)`,
        values: [ 'email' ],
    },
    reset_and_get_hallowner_password: {
        call: `SELECT * FROM reset_and_get_hallowner_password($1)`,
        values: ['email'],
    },
    drop_climbing_hall_and_owner: {
        call: `CALL climbup.drop_climbing_hall_and_owner($1)`,
        values: ['hall'],
    },
    update_climbing_hall_details: {
        calls: `CALL climbup.update_own_climbing_hall($1, $2, $3, $4)`,
        values: ['climbing_hall', 'street', 'city', 'postal_code', 'city'],
    },
    change_hallowner_password: {
        call: `CALL climbup.change_hallowner_password($1)`,
        values: ['new_password'],
    },
    // }, insert_route: {
    //     call: `CALL climbup.insert_route($1, $2, $3, $4, $5, $6)`,
    //     values: ['Route 1', 'Sector A', '5.10a', 'Red', '1', 'tilt_FALSE_TRUE'],
    // },
    update_route: {
        call: `CALL climbup.update_route($1, $2, $3, $4, $5, $6)`,
        values: ['Route 1', 'sektor A', '5.11b', 'Blau', '2', 'tilt_FALSE_TRUE'], 
    },
    delete_route: {
        call: `CALL climbup.delete_route($1)`,
        values: ['route_name_to_be_deleted'],
    },
    get_climbing_halls_list: {
        call: `CALL climbup.get_climbing_halls_list();`,
    },
    insert_route: {
        call: `CALL climbup.insert_route($1, $2, $3, $4, $5, $6)`,
        values: ['route_name','sector', 'difficulty', 'color', 'line_number', 'tilt_TRUE_FALSE'],
    },
});

export const Climber = Object.freeze({
    register_climber: {
        call: `SELECT climbup.register_climber_user($1, $2, $3)`,
        values: [ 'new_username', 'new_pw', 'email' ],
    },
    change_climber_pw: {
        call:`Call climbup.change_climber_password($1)`,
        values: ['new_pw'],
    },
    drop_climber: {
        call: `CALL climbup.drop_climber_user($1)`,
        values: ['climber_name'],   
    },
    add_favorite: {
        call:`CALL climbup.add_favorite($1)`,
        values: ['hall_name'],
    },
    remove_favorite: {
        call: `CALL climbup.remove_favorite($1)`,
        values: ['climbing_hall_name'],
    },
    get_user_favorites: {
        call:`SELECT * FROM climbup.get_user_favorites();`,
    },
    insert_user_statistic: {
        call: `CALL climbup.insert_user_statistic('Testhall2', 'Route1', '6','2', TRUE)`,
        values: ['hall_name', 'route', 'difficulty', 'nr_rests', 'reached_top_TRUE_FALSE'],
    },
    get_user_statistics: {
        call: `CALL climbup.get_user_statistics($1, $2)`,
        values: ['start_date_2024-01-01', 'end_date_2024-01-01'],
    },
    get_user_climbed_routes: {
        call: `CALL climbup.get_user_climbed_routes($1, $2)`,
        values: ['start_date_2024-01-01', 'end_date_2024-01-01'],
    },
    delete_user_statistic: {
        call:`CALL climbup.delete_user_statistic($1, $2, $3)`,
        values: [ 'hall_name', 'route', 'time_stamp_2024-02-16 14:00:00'],
    },
    get_routes_by_hall_name: {
        call: `CALL climbup.get_routes_details_by_hall_name($1)`,
        values: ['hall_name'],
    },
    get_routes_by_route_name: {
        call: `CALL climbup.get_route_details_by_name($1, $2)`,
        values: ['hall_name', 'route_name'],
    },
    get_routes_by_sector: {
        call: `CALL climbup.get_routes_details_by_sector($1, $2)`,
        values: ['hall_name', 'sector_label'],
    },
    get_routes_by_difficulty: {
        call: `CALL climbup.get_routes_details_by_difficulty($1, $2)`,
        value: ['hall_name', 'difficulty_5.10a'],
    },
    get_climbing_halls_list: {
        call: `CALL climbup.get_climbing_halls_list();`,
    },//#endregion
    get_halls_test: {
        call:`SELECT * from climbup.climbing_halls`,
    },
});

// module.exports = { Hall_Owner, Climber };
