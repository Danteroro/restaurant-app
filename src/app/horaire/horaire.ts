export interface Horaire {

    horaire_id: number;
    title: string;
    subtitle: string;
    day: string;
    hours_day: string;
    night: string;
    hours_night: string;
    weekend: string;
    hours_week: string;
    infos: string;
    telephone: string;

}


/*export const HORAIRES = [{

        id: 1,
        title: 'Nos horaires',
        subtitle: 'Lundi au dimanche (sauf jours fériés)',
        day: 'Midis ',
        hoursday: '12h à 15h',
        night: 'Soirs :',
        hoursnight: '19h à 22h30',
        weekend: 'Week-end :',
        hoursweek: '12h à 23h',
        infos: 'Pour toutes informations supplémentaires',
        telephone: '01 64 00 00 00',

    }

]*/