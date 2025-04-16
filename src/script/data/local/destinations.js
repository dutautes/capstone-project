const destinations = [
    {
        strTitle: 'Candi Borobudur',
        strImageUrl: '../assets/img/candi-borobudur.jpeg',
        strDescriptionIND: 'Salah satu keajaiban dunia yang terletak di Magelang, Jawa Tengah.',
        strProvince: 'Jawa Tengah'
    },
    {
        strTitle: 'Candi Prambanan',
        strImageUrl: '../assets/img/candi-prambanan.jpeg',
        strDescriptionIND: 'Kompleks candi Hindu terbesar di Indonesia dengan arsitektur megah.',
        strProvince: 'Jawa Tengah'
    },
    {
        strTitle: 'Tanah Lot',
        strImageUrl: '../assets/img/tanah-lot.jpeg',
        strDescriptionIND: 'Pura unik di Bali yang terletak di atas batu karang di tepi laut.',
        strProvince: 'Bali'
    },
    {
        strTitle: 'Pink Beach',
        strImageUrl: '../assets/img/pink-beach.jpeg',
        strDescriptionIND: 'Pantai unik dengan pasir berwarna merah muda yang langka di dunia.',
        strProvince: 'NTB'
    },
    {
        strTitle: 'Gunung Bromo',
        strImageUrl: '../assets/img/gunung-bromo.jpeg',
        strDescriptionIND: 'Ikon wisata alam dengan lautan pasir dan sunrise yang epic.',
        strProvince: 'Jawa Timur'
    },
    {
        strTitle: 'Gunung Rinjani',
        strImageUrl: '../assets/img/gunung-rinjani.jpeg',
        strDescriptionIND: 'Salah satu gunung tertinggi di Indonesia dengan Danau Segara Anak.',
        strProvince: 'NTB'
    },
    {
        strTitle: 'Tana Toraja',
        strImageUrl: '../assets/img/tana-toraja.jpeg',
        strDescriptionIND: 'Kawasan budaya unik di Sulawesi Selatan dengan rumah adat Tongkonan dan ritual pemakaman tradisional.',
        strProvince: 'Sulawesi Selatan'
    },
    {
        strTitle: 'Raja Ampat',
        strImageUrl: '../assets/img/raja-ampat.jpeg',
        strDescriptionIND: 'Surga bawah laut di Papua Barat dengan keanekaragaman hayati yang luar biasa.',
        strProvince: 'Papua Barat'
    },
    {
        strTitle: 'Danau Toba',
        strImageUrl: '../assets/img/danau-toba.jpeg',
        strDescriptionIND: 'Danau vulkanik terbesar di dunia yang memiliki pulau Samosir di tengahnya.',
        strProvince: 'Sumatera Utara'
    },
    {
        strTitle: 'Kampung Naga',
        strImageUrl: '../assets/img/kampung-naga.jpeg',
        strDescriptionIND: 'Perkampungan adat Sunda yang masih mempertahankan gaya hidup tradisional.',
        strProvince: 'Jawa Barat'
    },
    {
        strTitle: 'Wae Rebo',
        strImageUrl: '../assets/img/wae-rebo.jpeg',
        strDescriptionIND: 'Desa adat terpencil di pegunungan Flores dengan rumah kerucut tradisional.',
        strProvince: 'NTT'
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