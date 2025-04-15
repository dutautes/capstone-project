import Utils from '../utils/utils.js';
import Destinations from '../data/local/destinations.js';
import HistoryStorage from '../storage/historyStorage.js';

const home = () => {
    console.log('Home page JS dimuat');

    const searchformElement = document.querySelector('#searchForm');
    const destinationContainerListElement = document.querySelector('#destinasiElement');
    const destinationLoadingElement = document.querySelector('.search-loading');
    const destinationListElement = document.querySelector('#destination-list');

    const showDestination = (query, category) => {
        showLoading();

        const result = Destinations.searchDestination(query, category);
        displayResult(result);

        showDestinationList();
    };

    const onSearchHandler = (event) => {
        event.preventDefault();
        const query = document.querySelector('#searchBox').value;
        const category = document.querySelector('#filterCategory').value;
        showDestination(query, category);
    };

    const showInitialDestinations = () => {
        const allDestinations = Destinations.getAll();
        const topThree = allDestinations.slice(0, 3);
        displayResult(topThree);
        showDestinationList();
    };

    const displayResult = (destinations) => {
        const destinationItems = destinations.map((destination) => {
            return `
                <div class="col-md-4">
                    <div class="card h-100">
                        <img src="${destination.strImageUrl}" class="card-img-top" alt="${destination.strTitle}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${destination.strTitle}</h5>
                            <p class="card-text flex-grow-1">${destination.strDescriptionIND}</p>
                            <a href="#" class="btn btn-primary mt-auto" data-title="${destination.strTitle}">Selengkapnya</a>
                        </div>
                    </div>
                </div>
            `;
        });

        destinationListElement.innerHTML = `
            <div>
                <h3 class="mb-2 mt-4 text-center">Destinasi Populer</h3>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    ${destinationItems.join('')}
                </div>
            </div>
        `;

        // Event listener tombol "Selengkapnya"
        destinationListElement.querySelectorAll('a[data-title]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const title = button.getAttribute('data-title');
                const selected = destinations.find(dest => dest.strTitle === title);
                if (selected) {
                    HistoryStorage.addHistory(selected);
                    updateHistorySection();
                }
            });
        });
    };

    const updateHistorySection = () => {
        const riwayatList = document.querySelector('#riwayatList');
        const histories = HistoryStorage.getHistory();

        riwayatList.innerHTML = '';

        if (histories.length === 0) {
            riwayatList.innerHTML = '<li class="list-group-item">Belum ada riwayat kunjungan.</li>';
        } else {
            histories.forEach((item) => {
                const li = document.createElement('li');
                li.classList.add('list-group-item');
                li.innerHTML = `
                    <strong>${item.strTitle}</strong> - ${item.strProvince}<br>
                    <small>${item.strDescriptionIND}</small>
                `;
                riwayatList.appendChild(li);
            });
        }

        // Tambah tombol hapus riwayat (sekali saja)
        let clearBtn = document.querySelector('#clearHistoryBtn');
        if (!clearBtn && histories.length > 0) {
            clearBtn = document.createElement('button');
            clearBtn.id = 'clearHistoryBtn';
            clearBtn.className = 'btn btn-danger my-3';
            clearBtn.textContent = 'Hapus Riwayat';
            riwayatList.parentNode.insertBefore(clearBtn, riwayatList);

            clearBtn.addEventListener('click', () => {
                HistoryStorage.clearHistory();
                updateHistorySection();
            });
        }
    };

    const showLoading = () => {
        Array.from(destinationContainerListElement.children).forEach((element) => {
            Utils.hideElement(element);
        });
        Utils.showElement(destinationLoadingElement);
    };

    const showDestinationList = () => {
        Array.from(destinationContainerListElement.children).forEach((element) => {
            Utils.hideElement(element);
        });
        Utils.showElement(destinationListElement);
    };

    // Inisialisasi
    searchformElement.addEventListener('submit', onSearchHandler);
    showInitialDestinations();
    updateHistorySection();
};

export default home;
