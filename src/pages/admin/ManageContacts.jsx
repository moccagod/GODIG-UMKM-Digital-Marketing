import React from "react";
import RequireAuth from "../../components/RequireAuth";
import PageWrapper from "../../components/PageWrapper";
import AdminLayout from "../../layouts/AdminLayout";

const ManageContacts = () => {
  return (
    <RequireAuth>
      <PageWrapper>
        <AdminLayout>
          <h1 className="text-2xl font-bold mb-4">Manajemen Kontak</h1>
          <p>Fitur tambah/edit/hapus kontak akan ditampilkan di sini.</p>
        </AdminLayout>
      </PageWrapper>
    </RequireAuth>
  );
};

export default ManageContacts;
