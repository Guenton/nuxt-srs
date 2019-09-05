<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand to="/home">S&I SRS</b-navbar-brand>
      <b-navbar-nav>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Add" right>
          <b-dropdown-item to="/emp/add">Employees</b-dropdown-item>
          <b-dropdown-item to="/pos/add">Positions</b-dropdown-item>
          <b-dropdown-item to="/sub/add">Subsidiaries</b-dropdown-item>
          <b-dropdown-item to="/service/add">Services</b-dropdown-item>
          <b-dropdown-item to="/task/add">Tasks</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Edit" right>
          <b-dropdown-item to="/emp/edit">Employees</b-dropdown-item>
          <b-dropdown-item to="/pos/edit">Positions</b-dropdown-item>
          <b-dropdown-item to="/sub/edit">Subsidiaries</b-dropdown-item>
          <b-dropdown-item to="/service/edit">Services</b-dropdown-item>
          <b-dropdown-item to="/task/edit">Tasks</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Remove" right>
          <b-dropdown-item to="/emp/rem">Employees</b-dropdown-item>
          <b-dropdown-item to="/pos/rem">Positions</b-dropdown-item>
          <b-dropdown-item to="/sub/rem">Subsidiaries</b-dropdown-item>
          <b-dropdown-item to="/service/rem">Services</b-dropdown-item>
          <b-dropdown-item to="/task/rem">Tasks</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
