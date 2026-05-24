# OSM Neighborhood Analysis / OSM Mahalle Analizi

[![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-199900)](https://leafletjs.com/)
[![OpenStreetMap](https://img.shields.io/badge/OSM-Overpass_API-7EBC6F)](https://overpass-api.de/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

**English** | [Türkçe](#türkçe)

https://web-buffer-analiz.pages.dev/ linki

---

## English

### Overview

**OSM Neighborhood Analysis** is a browser-based single-page application that analyzes the surroundings of any location on Earth using OpenStreetMap data. It queries the Overpass API to categorize nearby amenities and displays results on an interactive map with emoji markers.

Built as a lightweight, zero-dependency (except Leaflet) tool for urban analysis, real estate assessment, and neighborhood exploration.

### Features

- **Interactive Map** — Click anywhere on the Leaflet-powered map to set the analysis center
- **Radius Control** — Adjustable search radius (50m – 5000m)
- **14-Category Analysis** — Buildings, Workplaces, Metro/Stations, Education, Health, Food & Drink, Places of Worship, Parks, Financial, Public Services, Vehicles, Entertainment, Urban Furniture, Other
- **Emoji Markers** — Each point of interest is displayed with a color-coded emoji icon on the map
- **Bilingual UI** — Full Turkish / English interface with instant switching
- **Dark Theme** — Clean, modern dark UI with glassmorphism panels
- **Mobile Responsive** — Adapts layout for smaller screens
- **Zero Server Required** — Runs entirely in the browser, direct Overpass API queries

### How It Works

1. Open `index.html` in any modern browser
2. Click on the map to select a location (or enter coordinates manually)
3. Adjust the search radius (default: 500m)
4. Click **"Analyze"** — the app queries OpenStreetMap via the Overpass API
5. Results appear in the right panel with counts per category
6. Each mapped amenity gets an emoji marker on the map — hover to see its name

### Data Sources

All data is sourced from **[OpenStreetMap](https://openstreetmap.org)** via the **[Overpass API](https://overpass-api.de/)**. The query looks for:
- Buildings, shops, offices
- Metro / railway stations
- All `amenity` tagged objects
- `leisure` tagged objects (parks, playgrounds, etc.)

### Usage

```bash
# No build step, no dependencies to install.
# Just open the file in your browser:
open index.html
```

Or serve with any static file server:

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

### File Structure

```
web_buffer_analiz/
├── index.html        # Single-page application (HTML + CSS + JS)
├── zoomed_emoji.png  # Marker emoji helper asset
└── README.md         # This file
```

### Tech Stack

| Technology | Purpose |
|---|---|
| [Leaflet.js](https://leafletjs.com/) | Interactive map rendering |
| [OpenStreetMap](https://openstreetmap.org/) | Base map tiles & data source |
| [Overpass API](https://overpass-api.de/) | Real-time spatial data queries |
| Vanilla JavaScript | All application logic (no framework) |

---

## Türkçe

### Genel Bakış

**OSM Mahalle Analizi**, OpenStreetMap verilerini kullanarak dünya üzerindeki herhangi bir konumun çevresini analiz eden, tarayıcı tabanlı tek sayfalık bir uygulamadır. Overpass API'sini sorgulayarak çevredeki olanakları kategorilere ayırır ve sonuçları emoji işaretçileriyle etkileşimli bir haritada gösterir.

Hafif, sıfır bağımlılıklı (Leaflet dışında) bir kentsel analiz, gayrimenkul değerlendirme ve mahalle keşif aracı olarak geliştirilmiştir.

### Özellikler

- **Etkileşimli Harita** — Leaflet tabanlı haritada herhangi bir yere tıklayarak analiz merkezini belirleyin
- **Yarıçap Ayarı** — Ayarlanabilir arama yarıçapı (50m – 5000m)
- **14 Kategorili Analiz** — Binalar, İş Yerleri, Metro/İstasyonlar, Eğitim, Sağlık, Yeme-İçme, İbadet Yerleri, Parklar, Finans, Kamu Hizmetleri, Araçlar, Eğlence, Kent Mobilyası, Diğer
- **Emoji İşaretçileri** — Her ilgi noktası, haritada renk kodlu emoji simgesiyle görüntülenir
- **Çift Dilli Arayüz** — Tam Türkçe / İngilizce arayüz, anında geçiş
- **Koyu Tema** — Cam efekti panellerle temiz, modern koyu tema
- **Mobil Uyumlu** — Küçük ekranlar için uyarlanabilir düzen
- **Sunucu Gerektirmez** — Tamamen tarayıcıda çalışır, doğrudan Overpass API sorguları

### Nasıl Çalışır

1. `index.html` dosyasını modern bir tarayıcıda açın
2. Bir konum seçmek için haritaya tıklayın (veya koordinatları manuel girin)
3. Arama yarıçapını ayarlayın (varsayılan: 500m)
4. **"Analiz Et"** butonuna tıklayın — uygulama OpenStreetMap verilerini Overpass API üzerinden sorgular
5. Sonuçlar sağ panelde kategori bazlı sayılarla görüntülenir
6. Haritadaki her olanak emoji işaretçisiyle gösterilir — üzerine gelerek adını görebilirsiniz

### Veri Kaynakları

Tüm veriler **[OpenStreetMap](https://openstreetmap.org)** üzerinden **[Overpass API](https://overpass-api.de/)** aracılığıyla alınır. Sorgu şunları arar:
- Binalar, dükkanlar, ofisler
- Metro / tren istasyonları
- `amenity` etiketli tüm nesneler
- `leisure` etiketli nesneler (parklar, oyun alanları vb.)

### Kullanım

```bash
# Derleme adımı veya kurulum gerektirmez.
# Dosyayı doğrudan tarayıcıda açın:
open index.html
```

Veya herhangi bir statik dosya sunucusuyla çalıştırın:

```bash
# Python
python -m http.server 8080

# Node.js (npx)
npx serve .
```

### Dosya Yapısı

```
web_buffer_analiz/
├── index.html        # Tek sayfalık uygulama (HTML + CSS + JS)
├── zoomed_emoji.png  # Emoji işaretçisi yardımcı dosyası
└── README.md         # Bu dosya
```

### Teknoloji Altyapısı

| Teknoloji | Amaç |
|---|---|
| [Leaflet.js](https://leafletjs.com/) | Etkileşimli harita gösterimi |
| [OpenStreetMap](https://openstreetmap.org/) | Temel harita katmanı & veri kaynağı |
| [Overpass API](https://overpass-api.de/) | Gerçek zamanlı konumsal veri sorgulama |
| Vanilla JavaScript | Tüm uygulama mantığı (framework yok) |

---

### License / Lisans

This project is open source under the **MIT License** — feel free to use, modify, and distribute.

Bu proje **MIT Lisansı** ile açık kaynaktır — kullanabilir, değiştirebilir ve dağıtabilirsiniz.
