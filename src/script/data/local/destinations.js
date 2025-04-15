const destinations = [
    {
        strTitle: 'Candi Borobudur',
        strImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Borobudur-Nothwest-view.jpg',
        strDescriptionIND: 'Salah satu keajaiban dunia yang terletak di Magelang, Jawa Tengah.',
        strProvince: 'Jawa Tengah'
    },
    {
        strTitle: 'Candi Prambanan',
        strImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Prambanan_Temple_Complex.jpg​',
        strDescriptionIND: 'Kompleks candi Hindu terbesar di Indonesia dengan arsitektur megah.',
        strProvince: 'Jawa Tengah'
    },
    {
        strTitle: 'Tanah Lot',
        strImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Tanah_Lot_Bali.jpg',
        strDescriptionIND: 'Pura unik di Bali yang terletak di atas batu karang di tepi laut.',
        strProvince: 'Bali'
    },
    {
        strTitle: 'Pink Beach',
        strImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Pink_Beach_Komodo.jpg',
        strDescriptionIND: 'Pantai unik dengan pasir berwarna merah muda yang langka di dunia.',
        strProvince: 'NTB'
    },
    {
        strTitle: 'Gunung Bromo',
        strImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Bromo_Tengger_Semeru_National_Park.jpg',
        strDescriptionIND:' Ikon wisata alam dengan lautan pasir dan sunrise yang epic.',
        strProvince: 'Jawa Timur'
    },
    {
        strTitle: 'Gunung Rinjani',
        strImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Mount_Rinjani.jpg​',
        strDescriptionIND: 'Salah satu gunung tertinggi di Indonesia dengan Danau Segara Anak.',
        strProvince: 'NTB'
    }
];


class Destinations {
    static getAll() {
        return destinations;
    }

    static searchDestination(query) {
        return destinations.filter((destination) => {
            const loweredCaseClubName = (destination.strTitle || '-').toLowerCase();
            const jammedClubName = loweredCaseClubName.replace(/\s/g, '');
            const loweredCaseQuery = query.toLowerCase();
            const jammedQuery = loweredCaseQuery.replace(/\s/g, '');
            return jammedClubName.indexOf(jammedQuery) !== -1;
        });
    }

    static searchDestination(query, category = '') {
        return destinations.filter((destination) => {
            const title = (destination.strTitle || '').toLowerCase().replace(/\s/g, '');
            const queryFiltered = query.toLowerCase().replace(/\s/g, '');
            const categoryMatch = category ? destination.strProvince === category : true;
            return title.includes(queryFiltered) && categoryMatch;
        });
    }
    
}

export default Destinations;