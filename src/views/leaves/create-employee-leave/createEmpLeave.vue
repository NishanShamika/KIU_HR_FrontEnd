<template>


  <div>



    <b-card>
      <validation-observer ref="simpleRules">


        <template #code>
          {{ codeBasic }}
        </template>
        <b-form>
          <b-row>
            <b-col cols="12" class="mb-1">
              <b-button
                  class="mr-1"
                  size="sm"
                  type="submit"
                  variant="primary"
                  @click.prevent.stop="addAllEmployees"
              >
                Add All Employee
              </b-button>
              <b-button
                  size="sm"
                  variant="primary"
                  v-b-modal.modal-lg
              >
                Add New Leave Type
              </b-button>
              <b-modal id="modal-lg" size="lg" title="Add New Leave Type" centered >
                  <template #modal-header>
                    <button type="button" class="close" aria-label="Close" style="margin-right: 0.3px; margin-top: 0.3px;" @click="$bvModal.hide('modal-lg')">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </template>
                  <validation-provider v-slot="{ errors }" name="New Leave Type" rules="required" ref="form">
                    <b-form-input
                      id="v-label"
                      v-model="getNewLeaveType"
                      placeholder="Enter New Leave Type"
                    />
                    <small class="text-danger">{{ errors[0] }}</small>
                  </validation-provider>
                  <template #modal-footer>
                    <button v-b-modal.modal-close_visit class="btn btn-danger btn-sm m-1" @click="clearInput">Clear</button>
                    <button v-b-modal.modal-close_visit class="btn btn-primary btn-sm m-1" @click="validateAndAddLeaveType">Submit</button> <!-- Call validateAndAddLeaveType method on click -->
                  </template>
                </b-modal>


              
            </b-col>

            <!-- Priority -->
            <b-col cols="12">
              <b-form-group
              label="Add Employee"
              label-for="add-guests"
            >
            <validation-provider
                    #default="{ errors }"
                    name="Employee"
                    rules="required">
              <v-select
                v-model="getUserList"
                multiple
                :close-on-select="false"
                :options="userList.slice(1)"
                label="name"
                input-id="add-guests"
                placeholder="Please select"
         
              >
                <template #selected-option="{ avatar, name }" >
                  <b-avatar
                    size="sm"
                    class="border border-white"
                    :src="avatar"
                  />
                  <span class="ml-50 align-middle"> {{ name }}</span>
                </template>
              </v-select>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
            </b-form-group>
            </b-col>

            <b-col cols="12">
              <b-form-group
                  label="Leave Type"
                  label-for="v-leave-type"
              >
                <validation-provider
                    #default="{ errors }"
                    name="Leave Type"
                    rules="required">
                  <v-select
                    v-model="getLeaveType"
                    :options="leaveTypeList"
                    label="leaveTypeName"
                    placeholder="Please select"
                    >
                    <template slot="option" slot-scope="option">
                      <span>{{ option.leaveTypeName }}</span>
                    </template>
                  </v-select>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-group
                  label="Original Leaves"
                  label-for="v-label"
              >
                <validation-provider
                    #default="{ errors }"
                    name="Original Leave"
                    rules="required"
                >
                  <b-form-input
                      id="v-label"
                      v-model="label"
                      placeholder="Enter Original Leaves"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>

            <!-- Label -->
            <b-col cols="12">
              <b-form-group
                  label="Available Leaves"
                  label-for="v-label"
              >
                <validation-provider
                    #default="{ errors }"
                    name="Enter Label"
                >
                  <b-form-input
                      disabled
                      id="v-label"
                      v-model="label"
                      placeholder="Enter Available Leaves"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <!-- Task  Description -->
            <!-- submit and reset button -->
            <b-col cols="12">
              <b-button
                  class="mr-1"
                  size="sm"
                  type="submit"
                  variant="primary"
                  @click.prevent="validationForm"
              >
                Submit
              </b-button>
              <b-button
                  size="sm"
                  type="reset"
                  variant="outline-secondary"
                  @click="resetForm"
              >
                Reset
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </validation-observer>
      <b-modal
          id="modal-select2"
          cancel-variant="outline-secondary"
          centered
          ok-title="submit"
          size="lg"
          title="Employee List"
          @ok="handleOk"
      >
        <good-table-basic/>
      </b-modal>


      <b-modal
          ref="my-modal"
          hide-footer
          title="Using Component Methods"
      >
        <div class="d-block text-center">
          <h3>Hello From My Modal!</h3>
        </div>
        <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-3"
            variant="outline-secondary"
            block
            @click="hideModal"
        >
          Close Me
        </b-button>
        <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            class="mt-2"
            variant="outline-primary"
            block
            @click="toggleModal"
        >
          Toggle Me
        </b-button>
      </b-modal>

    </b-card>
  </div>



</template>

<script>

import vSelect from 'vue-select'
import {ValidationObserver, ValidationProvider} from 'vee-validate'
import {required} from '@validations'
import flatPickr from 'vue-flatpickr-component'
import {VueGoodTable} from 'vue-good-table'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BTable } from 'bootstrap-vue'
import { codeBasic } from '../code2'
import leaveAPI from "@/api/leave_ui";
import {
  BAvatar,
  BButton,
  BCard,
  BCardText,
  BCol,
  BForm,
  BFormCheckbox,
  BFormDatepicker,
  BFormFile,
  BFormGroup,
  BFormInput,
  BFormTextarea,
  BFormTimepicker,
  BListGroup,
  BListGroupItem,
  BRow,
  VBModal,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import {getUserData} from "@/auth/utils";
import GoodTableBasic from './vue-good-table/GoodTableBasic'
/* eslint-disable */
export default {
  name: 'createEmpLeave',
  components: {
    flatPickr, BCol, BRow, BFormDatepicker, BFormTimepicker,
    BCardCode, VueGoodTable, GoodTableBasic,
    BAvatar,
    ValidationProvider,
    ValidationObserver,
    BFormTextarea,
    BButton,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BFormFile,
    BListGroup,
    BListGroupItem,
    BCardText,
    BCard,
    vSelect,
    BTable
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  /* eslint-disable */
  data() {
    return {
      userID: 1,
      categoryID: '',
      title: '',
      label: '',
      taskDescription: '',
      reporterID: '',
      estimate: '0',
      originalEstimate: '',
      blockedTask: '',
      lastUpdatedUser: '',
      getCategory: null,
      getRecurring: null,
      getPriority: null,
      getLeaveType: null,
      getUserList : [],
      setEmpId: null,
      getNewLeaveType: null,

      rows: [],
      searchTerm: '',
      addEmployeePopupActive: false,
      a: false,

      items: [{
        id: 1,
        name: 'test',
        prevHeight: 0,
      }],

      nextTodoId: 2,
      file: '',
      id_back: '',
      doc: {
        resource_name: '',
        cover_name: ''
      },
      weight: '',
      dueTime: '',

      dueDate: '',
      startDate: '',


      model: {
        file: '',
        coverPhoto: '',
        resource: '',
        department: '',
        departmentOptions: ['Nursing', 'BMS', 'Psychology', 'Marketing', 'Acupuncture', 'IT', 'HR', 'Accounting'],
        type: ['Book', 'Journal', 'Magazine', 'PDF', 'Article'],
        resourceOptions: ['Thesis', 'General'],
        option: [{title: 'Square'}, {title: 'Rectangle'}, {title: 'Rombo'}, {title: 'Romboid'}],
      },
      items2: [

      ],
      leaveType: [

      ],
      leaveTypeList: [

      ],
      userList: [

      ],

      codeBasic,
    }
  },

  async mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
    await this.getAllAvailableLeaves()
    await this.getAttendanceTypeByUsingEmpId()
    await this.getLeaveTypeList()
    await this.getUsers()
  },

  computed: {
    statusVariant() {
      const statusColor = {
        /* eslint-disable key-spacing */
        Current: 'light-primary',
        Professional: 'light-success',
        Rejected: 'light-danger',
        Resigned: 'light-warning',
        Applied: 'light-info',
        /* eslint-enable key-spacing */
      }

      return status => statusColor[status]
    },
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false
      return this.dir
    },
  },
  // created() {
  //   this.$http.get('/good-table/basic')
  //       .then(res => {
  //         this.rows = res.data
  //       })
  // },
  setup() {
    return {
      required,
    }
  },
  methods: {

    async getAllAvailableLeaves() {
      const userData = getUserData()
      console.log(userData)
      let response = (await leaveAPI.getLeaveBalance(userData.id))
      console.log(response)
      this.items2 = response.data.data
    },

    async getAttendanceTypeByUsingEmpId(){
      const userData = getUserData()
      let response = (await leaveAPI.getAttendanceTypeByUsingEmpId(userData.id))
      console.log(response)
      this.leaveType = response.data.data
    },

    async getLeaveTypeList(){
      let response = (await leaveAPI.getLeaveTypeList())
      console.log(response)
      this.leaveTypeList = response.data.data
    },

    async getUsers(){
      let response = (await leaveAPI.getUserList())
      console.log(response)
      this.userList = response.data.data
    },

    

    
  // addAllEmployees(name) {
  //  if (name == "ALL"){
  //     this.getUserList = this.userList;
  //     this.getUserList.splice(0, 1);
  //     this.setEmpId = 0;
  //   }
  // },

    addAllEmployees() {
      this.getUserList = this.userList[0];
    },

    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },

    handleOk(bvModalEvt) {
      console.log(bvModalEvt)
      // Prevent modal from closing
      // bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {

      // Push the name to submitted names
      // this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs['my-modal'].toggle('#toggle-btn')
      })
    },

    makeToast(msg, variant) {
      this.$bvToast.toast(`${msg}`, {
        title: `${variant || 'default'}`,
        variant,
        solid: false,
      })
    },
    resetForm() {
      this.getUserList = []; 
      this.getLeaveType = null; 
      this.label = null;
    },

    validationForm() {
      this.$refs.simpleRules.validate()
          .then(success => {
            if (success) {
              this.submit()
            }
          })
    },

    clearInput() {
      this.getNewLeaveType = ''; // Clear the input field by setting it to an empty string
    },

    validateAndAddLeaveType() {
    if (!this.getNewLeaveType || this.getNewLeaveType.trim() === '') {
      this.$refs.form.validate();
    } else {
      this.addLeaveType();
    }
  },
  async addLeaveType() {
    const payload = {
      leaveType: this.getNewLeaveType
    };
    try {
      const response = await leaveAPI.createNewLeaveType(payload);
      console.log(response.data.code);
      if (response.data.code === 403) {
        this.makeToast(response.data.msg, 'danger');
      } else if (response.data.code === 400) {
        this.makeToast(response.data.msg,'danger'); // Clear the input field by setting it to an empty string
      }else {
        this.makeToast(response.data.msg,'success');
        this.$bvModal.hide('modal-lg');
        await this.getLeaveTypeList();
        this.$router.push(`/apps/leaves/addLeave`);
      }
    } catch (error) {
      this.error = error.response.data.error;
      console.log(this.error);
    }
  },
  async submit() {
      if (this.getUserList.id == 0){
        const empIds = this.userList.map(emp => emp.id);
      const payload = {
        empIds:empIds,
        type:this.getLeaveType.leaveTypeName,
        originalLeaves: this.label,
        availableLeaves: this.label,
      }
      await leaveAPI.addEmployeeLeaves(payload)
          .then((response) => {
            this.boxOne = ''
              this.$bvModal.msgBoxConfirm('Are you sure?' ,{
              okTitle: 'YES', 
              cancelTitle: 'NO'
              })
          .then(value => {
            this.boxOne = value
            if (this.boxOne==true) {
              console.log(response.data.code)
            if (response.data.code == 400){
              this.makeToast(response.data.msg, 'danger');
            }
            else {

              this.resetForm();
              //this.$router.go()
              this.makeToast(response.data.msg,'success');
            }
            }
          })
          .catch(err => {
            console.log(err)
          })
          })
          .catch(({response}) => {
            this.error = response.data.error
            console.log(this.error)
          })}
          else{
            const empIds = this.getUserList.map(emp => emp.id);
            const payload = {
              empIds:empIds,
              type:this.getLeaveType.leaveTypeName,
              originalLeaves: this.label,
              availableLeaves: this.label,
            }
            await leaveAPI.addEmployeeLeaves(payload)
            .then((response) => {
            this.boxOne = ''
              this.$bvModal.msgBoxConfirm('Are you sure?',{
              okTitle: 'YES', 
              cancelTitle: 'NO'
              })
          .then(value => {
            this.boxOne = value
            if (this.boxOne==true) {
              console.log(response.data.code)
            if (response.data.code == 400){
              this.makeToast(response.data.msg, 'danger');
            }
            else {

              this.resetForm();
              //this.$router.go()
              this.makeToast(response.data.msg,'success');
            }
            }
          })
          .catch(err => {
            console.log(err)
          })
          })
                .catch(({response}) => {
                  this.error = response.data.error
                  console.log(this.error)
                })
    }},

  },
}

</script>

<style scoped>

</style>
