export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

// Generic paginate function that works with any Prisma model delegate
export async function paginate<T>(
  modelDelegate: { findMany: (args: Record<string, unknown>) => Promise<T[]>, count: (args: { where?: Record<string, unknown> }) => Promise<number> },
  args: Record<string, unknown>,
  page: number = 1,
  pageSize: number = 10
): Promise<PaginatedResponse<T>> {
  const skip = (page - 1) * pageSize;
  const take = pageSize;

  const [data, total] = await Promise.all([
    modelDelegate.findMany({ ...args, skip, take }),
    modelDelegate.count({ where: args.where }),
  ]);

  return {
    data,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  };
}
