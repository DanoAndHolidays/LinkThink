# VitePlus Test

一个基于 Vite+ 构建的 React 19 + TypeScript 现代化前端项目，同时正在开发一套 **AI Agent UI 组件库**。

## Tech Stack

- **React 19** + **TypeScript 5.9**
- **Vite+** - 统一的 Web 工具链（基于 Vite、Rolldown、Vitest）
- **SCSS** - 样式预处理
- **Compound Components** - 组合组件设计模式
- **Context + useReducer** - 状态管理

## Getting Started

```bash
# 安装依赖
vp install

# 启动开发服务器
vp dev

# 构建生产版本
vp build

# 运行检查（格式、lint、类型）
vp check

# 运行测试
vp test
```

## Project Structure

```
src/
├── main.tsx                    # 应用入口
├── App.tsx                     # 根组件
├── style.scss                  # 全局样式
├── types/ai.ts                 # AI 组件库类型定义
├── i18n/                       # 国际化 (en/zh)
│   ├── index.tsx
│   ├── en.ts
│   └── zh.ts
├── hooks/                      # 自定义 Hooks
│   ├── useChat.tsx             # Chat 状态管理
│   ├── useStreamingText.ts     # 流式文本处理
│   └── useTypewriter.ts        # 打字机动画
└── components/
    ├── Modal.tsx               # 弹窗组件
    └── ai/                     # AI Agent UI 组件库
        ├── ChatBubble/         # 消息气泡（复合组件）
        ├── ThinkingIndicator/ # AI 思考动画
        ├── AIAvatar/           # 头像组件
        ├── MessageInput/       # 输入框组件
        └── AIDemo.tsx          # 完整 Demo 展示
```

### 已完成组件

| 组件 | 说明 | 特性 |
|------|------|------|
| `ChatBubble` | 消息气泡 | 流式输出、时间戳、操作按钮 |
| `ThinkingIndicator` | AI 思考动画 | 优雅的加载状态 |
| `AIAvatar` | 头像组件 | 用户/AI 区分 |
| `MessageInput` | 输入框 | 自动聚焦、事件支持 |

### 核心特性

- **Compound Components** - 灵活的组合模式
- **Context + Reducer** - 类型安全的状态管理
- **Pure CSS + CSS Variables** - 主题适配、暗色模式
- **完整 TypeScript** - 零 any、严格类型
- **国际化支持** - 中英文切换

### 设计原则

1. **Discriminated Unions** - Action 类型安全
2. **Immutable Updates** - Reducer 返回新对象
3. **Provider 封装** - 屏蔽实现细节
4. **as const** - 翻译文件只读保证

## Vite+ Commands

| 命令 | 说明 |
|------|------|
| `vp dev` | 启动开发服务器 |
| `vp build` | 构建生产版本 |
| `vp preview` | 预览生产构建 |
| `vp check` | 格式、lint、类型检查 |
| `vp test` | 运行测试 |
| `vp lint` | 代码检查 |
| `vp fmt` | 代码格式化 |

> **注意**: 请始终使用 `vp` 而不是直接使用 pnpm、npm 或 yarn。
