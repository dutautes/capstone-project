const HISTORY_KEY = 'visit_history';

const HistoryStorage = {
    getHistory() {
      return JSON.parse(localStorage.getItem(HISTORY_KEY)) || [];
    },
  
    addHistory(destination) {
      const history = this.getHistory();
      if (!history.find(item => item.strTitle === destination.strTitle)) {
        history.unshift(destination); // Menambahkan ke depan (sehingga yang terbaru di atas)
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 5))); // Menyimpan maksimal 5 riwayat
      }
    },
  
    clearHistory() {
      localStorage.removeItem(HISTORY_KEY); // Menghapus riwayat dari localStorage
    }
};

export default HistoryStorage;