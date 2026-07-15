# Ata v2 — Enterprise Multi-Page Technical Architecture

## Architecture Diagram

```
+-----------------------------------------------------------------------------------+
|                        MULTI-PAGE FRONTEND LAYER (PWA)                            |
|  - HTML5 Pages: index.html, marketplace.html, product-detail.html, cold-chain.html|
|    cold-storage.html, orders.html, tracking.html, fintech.html, price-index.html  |
|    cooperative.html, sustainability.html, profile.html, enterprise.html, docs.html|
|  - Shared CSS Tokens & Assets (styles.css, app.js, icons)                        |
|  - Progressive Web App Manifest (manifest.json) & Service Worker (sw.js)         |
+-----------------------------------------------------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                       ZERO-COST INTELLIGENCE & FINTECH LAYER                      |
|  - Deterministic Heuristic Spatial Matchmaker (No AI API fees)                    |
|  - Quick-Pay Invoice Factoring Calculator (24h 90% advance engine)                |
|  - National Commodity Price Index Aggregator & Trend Analysis                     |
|  - Post-Harvest Loss Avoidance & ESG CO2 Abatement Calculator                     |
+-----------------------------------------------------------------------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                      HARDWARE, STORAGE & ESCROW INTEGRATION                       |
|  - Teltonika FMC130 / BLE Telemetry Integration (14h SVG Canvas Temperature Line) |
|  - Pay-as-You-Store Spot Solar Cold Room Storage Booking Engine                   |
|  - Conditional Flutterwave Escrow Capital Security Engine                         |
|  - Offline Storage Persistence (LocalStorage & IndexedDB Fallback)               |
+-----------------------------------------------------------------------------------+
```

## Technical Specs Summary

| Metric | Specification |
|---|---|
| **Architecture** | Real Multi-Page Static PWA with Shared Navigation Shell |
| **Cost Strategy** | $0/month (Free Static Hosting + Free Heuristic Engines + Free PWA Shell) |
| **Offline Capabilities** | Stale-While-Revalidate Service Worker with Background Queueing |
| **Telemetry Standard** | Teltonika FMC130 BLE Temperature Sensors (5-min telemetry stream) |
| **Supported Platforms** | Android, iOS, Windows, Mac, Linux via PWA Manifest |
