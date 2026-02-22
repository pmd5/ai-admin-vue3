// @ts-ignore
/* eslint-disable */

/**
 * 该文件为 @umijs/openapi 插件自动生成，请勿随意修改。如需修改请通过配置 openapi.config.ts 进行定制化。
 * */

import { request, type RequestOptions } from "@/utils/request";

/** 根据部门获取测试用例列表 GET /testcases */
export async function testcaseList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TestcaseListParams,
  options?: RequestOptions
) {
  return request<{
    items?: API.TestcaseEntity[];
    meta?: {
      itemCount?: number;
      totalItems?: number;
      itemsPerPage?: number;
      totalPages?: number;
      currentPage?: number;
    };
  }>("/testcases", {
    method: "GET",
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新增测试用例 POST /testcases */
export async function testcaseCreate(
  body: API.TestcaseDto,
  options?: RequestOptions
) {
  return request<any>("/testcases", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || { successMsg: "创建成功" }),
  });
}

/** 获取测试用例详情(含元素/脚本/历史/Bug) GET /testcases/${param0} */
export async function testcaseDetail(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TestcaseDetailParams,
  options?: RequestOptions
) {
  const { id: param0, ...queryParams } = params;
  return request<API.TestcaseEntity>(`/testcases/${param0}`, {
    method: "GET",
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 更新测试用例 PUT /testcases/${param0} */
export async function testcaseUpdate(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TestcaseUpdateParams,
  body: API.TestcaseUpdateDto,
  options?: RequestOptions
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/testcases/${param0}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    params: { ...queryParams },
    data: body,
    ...(options || { successMsg: "更新成功" }),
  });
}

/** 删除测试用例 DELETE /testcases/${param0} */
export async function testcaseDelete(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.TestcaseDeleteParams,
  options?: RequestOptions
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/testcases/${param0}`, {
    method: "DELETE",
    params: { ...queryParams },
    ...(options || { successMsg: "删除成功" }),
  });
}

/** 程序更新后自动标记失效用例并记录失败原因 POST /testcases/auto-mark-invalid */
export async function testcaseAutoMarkInvalid(
  body: API.AutoMarkInvalidDto,
  options?: RequestOptions
) {
  return request<any>("/testcases/auto-mark-invalid", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** AI批量修复失效用例(置为待AI优化) POST /testcases/batch/ai-fix */
export async function testcaseBatchAiFix(
  body: API.BatchIdsDto,
  options?: RequestOptions
) {
  return request<any>("/testcases/batch/ai-fix", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量执行/暂停测试用例 POST /testcases/batch/execution */
export async function testcaseBatchExecution(
  body: API.BatchExecutionDto,
  options?: RequestOptions
) {
  return request<any>("/testcases/batch/execution", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 批量关联Bug POST /testcases/batch/link-bugs */
export async function testcaseBatchLinkBugs(
  body: API.BatchLinkBugDto,
  options?: RequestOptions
) {
  return request<any>("/testcases/batch/link-bugs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}
