'use client';

import { useMemo, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
  createColumnHelper,
} from '@tanstack/react-table';
import { useUsers, useDeleteUser } from '@/hooks/useUsers';
import { formatPhone, normalizePhone } from '@/lib/utils/phone';
import {
  FiEdit2,
  FiTrash2,
  FiSearch,
  FiPlus,
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiChevronUp,
  FiX
} from 'react-icons/fi';
import UserForm from './UserForm';
import ModalComponent from '@/components/common/ModalComponent';

const roleLabels = {
  admin: 'Admin',
  moderator: 'Moderator',
  user: 'Kullanıcı',
};

const statusLabels = {
  active: 'Aktif',
  inactive: 'Pasif',
};

const columnHelper = createColumnHelper();

export default function UserTable({ canDelete = true }) {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState('');
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const { data, isLoading } = useUsers({
    page,
    limit: 10,
    search,
    role: roleFilter || undefined,
    status: statusFilter || undefined,
  });

  const deleteUser = useDeleteUser();

  const columns = useMemo(
    () => [
      columnHelper.accessor('phone', {
        header: 'Telefon',
        cell: (info) => {
          const phone = info.getValue();
          if (!phone) return <span className="text-slate-400">-</span>;
          const cleaned = normalizePhone(phone);
          // Remove country code (90) if present
          let phoneNumber = cleaned;
          if (cleaned.startsWith('90') && cleaned.length === 12) {
            phoneNumber = cleaned.slice(2);
          }
          // Format as 5XX XXX XX XX (without +90)
          if (phoneNumber.length === 10) {
            const formatted = `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 8)} ${phoneNumber.slice(8, 10)}`;
            return <div className="text-xs text-slate-900">{formatted}</div>;
          }
          return <div className="text-xs text-slate-900">{phone}</div>;
        },
        enableSorting: true,
      }),
      columnHelper.accessor('email', {
        header: 'E-posta',
        cell: (info) => (
          <div className="text-xs text-slate-600">
            {info.getValue() || <span className="text-slate-400">-</span>}
          </div>
        ),
        enableSorting: true,
      }),
      columnHelper.accessor('first_name', {
        header: 'Ad',
        cell: (info) => (
          <div className="text-xs text-slate-900">{info.getValue()}</div>
        ),
        enableSorting: true,
      }),
      columnHelper.accessor('last_name', {
        header: 'Soyad',
        cell: (info) => (
          <div className="text-xs text-slate-900">{info.getValue()}</div>
        ),
        enableSorting: true,
      }),
      columnHelper.accessor('role', {
        header: 'Rol',
        cell: (info) => (
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700">
            {roleLabels[info.getValue()] || info.getValue()}
          </span>
        ),
        enableSorting: true,
      }),
      columnHelper.accessor('status', {
        header: 'Durum',
        cell: (info) => (
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${info.getValue() === 'active'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
              }`}
          >
            {statusLabels[info.getValue()] || info.getValue()}
          </span>
        ),
        enableSorting: true,
      }),
      columnHelper.accessor('created_at', {
        header: 'Tarih',
        cell: (info) => {
          const date = new Date(info.getValue());
          return (
            <div className="text-xs text-slate-500">
              {date.toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </div>
          );
        },
        enableSorting: true,
      }),
      columnHelper.display({
        id: 'actions',
        header: '',
        cell: ({ row }) => (
          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                setSelectedUser(row.original);
                setIsModalOpen(true);
              }}
              className="p-1.5 text-primary hover:bg-primary/10 rounded transition-colors"
              title="Düzenle"
            >
              <FiEdit2 size={14} />
            </button>
            {canDelete && (
              <button
                onClick={() => {
                  setUserToDelete(row.original);
                  setIsDeleteModalOpen(true);
                }}
                className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-colors"
                title="Sil"
              >
                <FiTrash2 size={14} />
              </button>
            )}
          </div>
        ),
      }),
    ],
    [canDelete]
  );

  const table = useReactTable({
    data: data?.users || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
    manualSorting: true,
    pageCount: data?.pagination?.totalPages || 0,
    state: {
      pagination: {
        pageIndex: page - 1,
        pageSize: 10,
      },
    },
  });

  const handleDelete = async () => {
    if (userToDelete) {
      await deleteUser.mutateAsync(userToDelete.id);
      setIsDeleteModalOpen(false);
      setUserToDelete(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
          <p className="text-sm text-slate-500">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[24px] border border-slate-200 shadow-sm p-6">
      {/* Title Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Kullanıcı Yönetimi</h1>
        <p className="text-slate-600 mt-1">Tüm kullanıcıları görüntüleyin ve yönetin</p>
      </div>

      <div className="space-y-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center justify-between">
        {/* Search and Filters */}
        <div className="flex flex-wrap flex-1 gap-2">
          <div className="relative flex-1 min-w-[200px] flex gap-2">
            <div className="relative flex-1">
              <FiSearch className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Ara..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setSearch(searchInput);
                    setPage(1);
                  }
                }}
                className="w-full pl-8 pr-3 py-1.5 text-sm border border-slate-300 rounded-lg focus:ring-1 focus:ring-primary focus:border-transparent outline-none bg-white transition-all"
              />
            </div>
            <button
              onClick={() => {
                setSearch(searchInput);
                setPage(1);
              }}
              className="px-4 py-1.5 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium whitespace-nowrap"
            >
              Ara
            </button>
          </div>
          <select
            value={roleFilter}
            onChange={(e) => {
              setRoleFilter(e.target.value);
              setPage(1);
            }}
            className="px-3 py-1.5 pr-8 text-sm border border-slate-300 rounded-lg focus:ring-1 focus:ring-primary focus:border-transparent outline-none bg-white transition-all appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23475569%22%20d%3D%22M6%209L1%204h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_0.75rem_center] bg-no-repeat cursor-pointer"
          >
            <option value="">Rol</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
            <option value="user">Kullanıcı</option>
          </select>
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            className="px-3 py-1.5 pr-8 text-sm border border-slate-300 rounded-lg focus:ring-1 focus:ring-primary focus:border-transparent outline-none bg-white transition-all appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23475569%22%20d%3D%22M6%209L1%204h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_0.75rem_center] bg-no-repeat cursor-pointer"
          >
            <option value="">Durum</option>
            <option value="active">Aktif</option>
            <option value="inactive">Pasif</option>
          </select>
        </div>

        {/* Add User Button */}
        <button
          onClick={() => {
            setSelectedUser(null);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-1.5 px-4 py-1.5 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-medium whitespace-nowrap"
        >
          <FiPlus size={16} />
          <span>Yeni</span>
        </button>
      </div>

        {/* DataTable */}
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto table-scroll">
          <table className="w-full min-w-[800px]">
            <thead className="bg-slate-50 border-b border-slate-200">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className={`px-2 py-2 text-left text-xs font-medium text-slate-600 ${header.column.getCanSort() ? 'cursor-pointer select-none hover:bg-slate-100/50' : ''
                        }`}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div className="flex items-center gap-1.5">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getCanSort() && (
                          <span className="text-slate-400">
                            {{
                              asc: <FiChevronUp size={12} />,
                              desc: <FiChevronDown size={12} />,
                            }[header.column.getIsSorted()] ?? (
                                <FiChevronDown size={12} className="opacity-30" />
                              )}
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {table.getRowModel().rows.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="px-4 py-8 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-slate-300 mb-1">
                        <FiSearch size={32} />
                      </div>
                      <p className="text-sm text-slate-500">Kullanıcı bulunamadı</p>
                    </div>
                  </td>
                </tr>
              ) : (
                table.getRowModel().rows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={`transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'
                      } hover:bg-slate-50`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-2 py-2">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {data?.pagination && data.pagination.totalPages > 0 && (
          <div className="px-4 py-2.5 border-t border-slate-200 bg-slate-50/30">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <div className="text-xs text-slate-500">
                {data.pagination.total} /{' '}
                {((data.pagination.page - 1) * data.pagination.limit + 1)}-
                {Math.min(data.pagination.page * data.pagination.limit, data.pagination.total)}
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1 || isLoading}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs border border-slate-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-all text-slate-600"
                >
                  <FiChevronLeft size={14} />
                  <span>Önce</span>
                </button>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: Math.min(5, data.pagination.totalPages) }, (_, i) => {
                    let pageNum;
                    if (data.pagination.totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (page <= 3) {
                      pageNum = i + 1;
                    } else if (page >= data.pagination.totalPages - 2) {
                      pageNum = data.pagination.totalPages - 4 + i;
                    } else {
                      pageNum = page - 2 + i;
                    }
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`px-2 py-1 text-xs rounded transition-all ${page === pageNum
                          ? 'bg-primary text-white'
                          : 'text-slate-600 hover:bg-slate-100'
                          }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => setPage((p) => Math.min(data.pagination.totalPages, p + 1))}
                  disabled={page === data.pagination.totalPages || isLoading}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs border border-slate-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-all text-slate-600"
                >
                  <span>Sonra</span>
                  <FiChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>

      <ModalComponent
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedUser(null);
        }}
        title={selectedUser ? 'Kullanıcı Düzenle' : 'Yeni Kullanıcı'}
      >
        <UserForm
          user={selectedUser}
          onSuccess={() => {
            setIsModalOpen(false);
            setSelectedUser(null);
          }}
        />
      </ModalComponent>

      <ModalComponent
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setUserToDelete(null);
        }}
        title="Kullanıcıyı Sil"
      >
        <div className="space-y-4">
          <p className="text-slate-700">
            <span className="font-medium">{userToDelete?.first_name} {userToDelete?.last_name}</span> adlı kullanıcıyı silmek istediğinize emin misiniz?
          </p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => {
                setIsDeleteModalOpen(false);
                setUserToDelete(null);
              }}
              className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
            >
              İptal
            </button>
            <button
              onClick={handleDelete}
              disabled={deleteUser.isPending}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {deleteUser.isPending ? 'Siliniyor...' : 'Sil'}
            </button>
          </div>
        </div>
      </ModalComponent>
    </div>
  );
}

