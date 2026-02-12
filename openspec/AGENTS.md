# AI 助手行为准则 (Copilot Instructions)

> **Important**: This file is referenced by `.github/copilot-instructions.md`.

## 1. 技术规范

- **Vue 3 写法**:

  - **必须**使用 `<script setup lang="ts">` 语法。
  - **禁止**使用 Options API (`data`, `methods`, `computed` 对象写法)。
  - 组件名使用 PascalCase (如 `UserModal.vue`)。

- **状态管理 (Pinia)**:

  - 必须使用 **Setup Store** (函数式) 语法: `defineStore('id', () => { ... })`。
  - 不要使用 Options Store 写法。

- **样式 (CSS)**:

  - **优先建议**: 使用 UnoCSS 工具类 (Utility Classes) 完成布局和基础样式。
  - 避免编写大量自定义 CSS，除非 UnoCSS 无法满足需求。

- **TypeScript**:
  - 始终使用强类型。避免使用 `any`。
  - API 响应类型优先复用 `src/api/backend` 中自动生成的类型定义。

## 2. API 与数据请求交互

- **关键规则**: 本项目的 API 代码（`src/api/backend`）是**自动生成**的。
  - 无论何时需要发起请求，**首先检查** `src/api/backend` 中是否已存在对应的函数。
  - **严禁** 这里建议修改 `src/api/backend` 下的文件。
  - 如需新增手动请求，请参考 `src/utils/request` 的封装方式。

## 3.文件结构意识

- 注意这是一个 **Monorepo**。
  - 如果被问及通用组件，请检查是否应该放入 `packages/components` 或 `src/components`。
  - 如果遇到构建问题，考虑到 `packages/vite-plugin-*` 中的自定义插件。
- `src/` 目录是主应用根目录，导入时使用 `@/` 别名 (例如: `import { useUserStore } from '@/store/modules/user'`).

## 4. 避免幻觉

- 如果不确定某个组件库的 API (Ant Design Vue 4)，请让用户查阅文档或根据现有代码推断，不要编造不存在的 Props。
- 注意 `react-admin/` 目录是另一个项目，不要混淆上下文。

## 5. 语言

- 除非用户另有要求，否则请使用**中文**进行解释和注释。

## 6. 自我文档化 (Self-Documentation)

- **保持文档同步**:
  - 每当你创建了新的顶层业务模块 (在 `src/views` 下创建新文件夹) 或新的 Store 模块时，**必须**检查并更新 `openspec/SPEC.md` 中的 **"8. 业务模块映射"** 表格。
  ## 7. 常见编程模式 (AI Skills)

在实现以下 Vue 3 常见需求时，请遵循标准模式：

### 7.1 双向绑定自定义组件
- 使用 `defineModel` (Vue 3.4+) 而非 `props` + `emit`。
- 示例: `const model = defineModel<string>()`

### 7.2 异步组件加载
- 路由组件**必须**使用懒加载: `component: () => import('@/views/...')`。

### 7.3 UseHooks 封装
- 组合式函数必须以 `use` 开头。
- 返回对象应包含响应式状态 (`Ref`) 和操作方法 (`Function`)。
- 所有的副作用 (EventListener, Timer) 必须在 `onUnmounted` 或 `tryOnUnmounted` 中清理。

### 7.4 响应式解构
- 利用 Vue 3.5+ 的响应式 Props 解构特性，**不要**再使用 `toRefs(props)`。
- 正确: `const { title } = defineProps<{ title: string }>()` (在配置开启 reactiveDestructure 时)。

## 8. 专项技能 (Skills)

当处理特定领域的任务时，请激活以下专家模式：

### 8.1 📊 数据可视化专家 (Viz)
- **场景**: 使用 `echarts` 或 `vue-echarts`。
- **要求**:
  - 必须考虑响应式：图表应随窗口 `resize` 自动重绘 (使用 `useECharts` 或监听器)。
  - 避免在组件中硬编码大段 `option` 数据，应抽离为配置文件或 Hook。
  - 必须在组件卸载时销毁实例 (`dispose`) 以防止内存泄漏。

### 8.2 🌐 国际化翻译官 (i18n)
- **场景**: 编写页面 UI 文本。
- **要求**:
  - **严禁**在 `<template>` 或 JSX 中直接写死中文。
  - 必须使用 `$t('key')` 或 `t('key')` (即使 key 尚未定义)。
  - 在生成代码的同时，提供对应的 `en-US` 和 `zh-CN` 语言包 JSON 片段。

### 8.3 🎨 样式造型师 (UnoCSS)
- **场景**: 编写 CSS 样式。
- **要求**:
  - **优先使用** UnoCSS Token (e.g., `text-primary`, `bg-container`) 适配暗黑模式。
  - 使用 `flex gap-2` 代替 `margin` 来处理间距。
  - 避免使用 `style="..."` 内联样式。

### 8.4 🛡️ 类型体操运动员 (TypeScript)
- **场景**: 定义表格列、表单数据、API 参数。
- **要求**:
  - `Table` 列定义必须使用 `ColumnsType<RecordType>` 泛型。
  - 表单数据必须定义 Interface，**禁止** 使用 `any` 或 `{}`。
  - 所有的 `props` 定义必须使用 `defineProps<Interface>()` 泛型语法。

### 8.5 🧪 模拟数据构造师 (Mock)
- **场景**: 编写 MSW handler。
- **要求**:
  - 使用 `@faker-js/faker` 生成逼真的随机数据。
  - 必须模拟网络延迟 (`delay()`)。
  - 必须包含标准的分页结构 (`list`, `total`, `page`, `pageSize`)。

### 8.6 📝 Git 提交专家 (Git Commit)
- **场景**: 当用户要求生成 Commit Message 或执行提交操作时。
- **原则**:
  1. **原子性**: 每次提交只包含一个逻辑变更。
  2. **中文描述**: Subject **必须使用中文**，言简意赅。
  3. **安全检查**: 严禁提交 `.env`、密钥或硬编码密码。

- **Type 类型指南**:
  - `feat`: 新增功能 (Features)
  - `fix`: 问题修复 (Bug Fixes)
  - `docs`: 文档变更 (Documentation)
  - `style`: 格式调整 (不影响代码运行)
  - `refactor`: 代码重构 (即不是新增功能，也不是修改bug的代码变动)
  - `perf`: 性能优化
  - `test`: 增加测试
  - `build`: 构建系统或外部依赖影响
  - `ci`: CI 配置或脚本修改
  - `chore`: 其他不修改 `src` 或测试文件的更改
  - `revert`: 回退某个早前的提交

- **Scope 推断规则** (可选):
  - `src/views/system/xxx` -> `system-xxx`
  - `src/components/basic/Name` -> `comp-basic`
  - `src/api/backend` -> `api-backend`
  - `package.json` -> `deps`

- **格式范例**:
  - ✅ `feat(user): 新增头像上传功能`
  - ✅ `fix(auth): 修复 Token 过期时的死循环`
  - ✅ `style: 使用 Prettier 格式化代码`
  - ✅ `refactor(core): 简化事件总线逻辑`
  - ❌ `update code` (无意义)
  - ❌ `feat: login` (描述过短)

- **工作流**:
  1. 先运行 `git status` / `git diff --staged` 分析变更。
  2. 结合变更内容生成符合规范的 `<type>(<scope>): <subject>`。
  3. **直接执行提交**，无需用户二次确认。


## 9. 代码质量与重构 (Refactoring)

AI 必须具备“重构即编码”的意识：

- **DRY 原则检测**:
  - 在编写新组件或函数前，**必须先搜索**现有代码库，确认是否已存在类似功能的实现。
  - 如果发现现有组件只需微调（增加 Props）即可复用，**优先修改现有组件**，而不是创建新的。
- **主动提议抽象**:
  - 当你在同一个 View 中看到三次以上类似的逻辑块（如相同的 Table 配置或 Modal 逻辑），**必须**提议将其抽取为 Hooker (`useTableConfig`) 或子组件。




