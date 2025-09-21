# Microfrontends Setup Guide

Dự án này đã được chuyển đổi thành kiến trúc Microfrontend sử dụng Module Federation với Vite.

## Cấu trúc dự án

```
info-site/
├── src/                          # Host App (Main App)
├── microfrontends/
│   ├── hero/                     # Hero Section Microfrontend (Port 3001)
│   ├── about/                    # About Section Microfrontend (Port 3002)
│   ├── services/                 # Services Section Microfrontend (Port 3003)
│   └── game-showcase/           # Game Showcase Section Microfrontend (Port 3004)
└── scripts/
    └── start-microfrontends.sh  # Script để chạy tất cả microfrontends
```

## Cài đặt và chạy

### 1. Cài đặt dependencies cho tất cả microfrontends

```bash
yarn install:microfrontends
```

### 2. Chạy tất cả microfrontends và host app

```bash
yarn dev:microfrontends
```

Hoặc chạy từng microfrontend riêng lẻ:

```bash
# Terminal 1 - Hero Microfrontend
cd microfrontends/hero && yarn dev

# Terminal 2 - About Microfrontend
cd microfrontends/about && yarn dev

# Terminal 3 - Services Microfrontend
cd microfrontends/services && yarn dev

# Terminal 4 - Game Showcase Microfrontend
cd microfrontends/game-showcase && yarn dev

# Terminal 5 - Host App
yarn dev
```

### 3. Truy cập ứng dụng

-   **Host App**: http://localhost:3000
-   **Hero Microfrontend**: http://localhost:3001
-   **About Microfrontend**: http://localhost:3002
-   **Services Microfrontend**: http://localhost:3003
-   **Game Showcase Microfrontend**: http://localhost:3004

## Kiến trúc Module Federation

### Host App (Main App)

-   Port: 3000
-   Chứa: Header, Footer, Strengths, Game Demo sections
-   Import các microfrontends thông qua Module Federation

### Microfrontends

#### Hero Microfrontend

-   Port: 3001
-   Exposes: `./HeroSection`
-   Chứa: Hero section với iframe demo game

#### About Microfrontend

-   Port: 3002
-   Exposes: `./AboutSection`
-   Chứa: About section với thông tin công ty

#### Services Microfrontend

-   Port: 3003
-   Exposes: `./ServicesSection`
-   Chứa: Services section với các dịch vụ

#### Game Showcase Microfrontend

-   Port: 3004
-   Exposes: `./GameShowcaseSection`
-   Chứa: Game showcase section với modal video

## Shared Dependencies

Tất cả microfrontends đều share các dependencies sau:

-   `react` (singleton)
-   `react-dom` (singleton)
-   `react-router-dom` (singleton)

## Development Workflow

### Thêm microfrontend mới

1. Tạo thư mục mới trong `microfrontends/`
2. Tạo `package.json`, `vite.config.mts`, `tsconfig.json`
3. Cấu hình Module Federation trong `vite.config.mts`
4. Thêm remote vào host app trong `vite.config.mts`
5. Import component trong host app

### Cập nhật microfrontend

1. Chỉnh sửa code trong thư mục microfrontend tương ứng
2. Microfrontend sẽ tự động hot reload
3. Host app sẽ tự động cập nhật khi microfrontend thay đổi

### Build cho production

```bash
# Build tất cả microfrontends
yarn build:microfrontends

# Build host app
yarn build
```

## Lợi ích của kiến trúc này

1. **Team Autonomy**: Mỗi team có thể phát triển microfrontend độc lập
2. **Technology Diversity**: Có thể sử dụng framework khác nhau cho từng microfrontend
3. **Independent Deployment**: Deploy từng microfrontend riêng biệt
4. **Scalability**: Dễ dàng thêm/sửa/xóa features
5. **Performance**: Load chỉ những phần cần thiết

## Troubleshooting

### Lỗi CORS

Nếu gặp lỗi CORS, đảm bảo tất cả microfrontends đều có `cors: true` trong vite config.

### Lỗi Module not found

Kiểm tra:

1. Microfrontend đã chạy chưa
2. Port có đúng không
3. Expose name có đúng không
4. Shared dependencies có khớp version không

### Lỗi TypeScript

Đảm bảo file `src/types/microfrontends.d.ts` đã được tạo và cấu hình đúng.

## Scripts có sẵn

-   `yarn dev:microfrontends` - Chạy tất cả microfrontends và host app
-   `yarn install:microfrontends` - Cài đặt dependencies cho tất cả microfrontends
-   `yarn build:microfrontends` - Build tất cả microfrontends
