<template>
  <div class="un-min-h-screen un-bg-gray-50">
    <!-- 导航栏 -->
    <nav class="un-website-header">
      <div class="un-website-container">
        <div class="un-nav-container">
          <div class="un-nav-logo">Phoenix</div>
          <div class="un-nav-menu">
            <a href="#" class="un-nav-link">首页</a>
            <a href="#" class="un-nav-link">功能</a>
            <a href="#" class="un-nav-link">文档</a>
            <a href="#" class="un-nav-link">关于</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- 英雄区域 -->
    <section class="un-website-hero">
      <div class="un-website-container">
        <div class="un-flex-col-center un-text-center">
          <h1 class="un-hero-title">Phoenix 低代码平台</h1>
          <p class="un-hero-subtitle">
            快速构建现代化的 Web 应用，无需编写复杂代码
          </p>
          <div class="un-hero-cta">
            <button class="un-cta-button">开始使用</button>
            <button class="un-btn un-btn-secondary un-btn-lg">查看演示</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 功能特性 -->
    <section class="un-website-section">
      <div class="un-website-container">
        <h2 class="un-section-title">核心功能</h2>
        <p class="un-section-subtitle">
          提供完整的低代码开发解决方案，让开发更高效
        </p>
        
        <div class="un-responsive-grid">
          <div class="un-feature-card un-card-hover">
            <div class="un-feature-icon">🎨</div>
            <h3 class="un-text-xl un-font-semibold un-mb-2">可视化编辑器</h3>
            <p class="un-text-muted">拖拽式组件搭建，所见即所得的编辑体验</p>
          </div>
          
          <div class="un-feature-card un-card-hover">
            <div class="un-feature-icon">⚡</div>
            <h3 class="un-text-xl un-font-semibold un-mb-2">快速构建</h3>
            <p class="un-text-muted">丰富的组件库和模板，快速构建应用原型</p>
          </div>
          
          <div class="un-feature-card un-card-hover">
            <div class="un-feature-icon">🔧</div>
            <h3 class="un-text-xl un-font-semibold un-mb-2">灵活配置</h3>
            <p class="un-text-muted">强大的配置系统，满足各种业务需求</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="un-website-footer">
      <div class="un-website-container">
        <div class="un-flex-between un-items-center">
          <div class="un-text-white">
            © 2024 Phoenix. All rights reserved.
          </div>
          <div class="un-space-x-md">
            <a href="#" class="un-text-white hover:un-text-gray-300">隐私政策</a>
            <a href="#" class="un-text-white hover:un-text-gray-300">服务条款</a>
            <a href="#" class="un-text-white hover:un-text-gray-300">联系我们</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// 使用 setup script 语法
console.log('Phoenix 低代码平台启动成功！');
</script>
