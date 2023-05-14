import mongoose from "mongoose";
const { Schema } = mongoose;

// Schema Types
// https://mongoosejs.com/docs/schematypes.html

const ContractorSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    is_individual: {
      type: Boolean,
      required: true,
      unique: false,
      default: true,
    },

    // Individual Contractors Data

    surname: {
      type: String,
      required: true,
      unique: false,
      // minlength и maxlength: задают минимальную и максимальную длину для строк
      minlength: 3,
      maxlength: 100,
    },
    name: {
      type: String,
      required: false,
      unique: false,
      maxlength: 100,
    },
    ic_patronymic: {
      type: String,
      required: false,
      unique: false,
      maxlength: 100,
    },
    ic_is_female: {
      type: Boolean,
      required: true,
      unique: false,
      default: false,
    },
    ic_birth_certificate_series: {
      type: String,
      required: false,
      unique: false,
      maxlength: 20,
    },
    ic_birth_certificate_number: {
      type: String,
      required: false,
      unique: false,
      maxlength: 20,
    },
    ic_birth_certificate_date_of_issue: {
      type: Date,
      required: false,
      unique: false,
    },
    ic_birth_sertificate_marriage_registry: {
      type: String,
      required: false,
      unique: false,
      maxlength: 100,
    },
    ic_passport_series: {
      type: String,
      required: false,
      unique: false,
      maxlength: 100,
    },
    ic_passport_number: {
      type: String,
      required: false,
      unique: false,
      maxlength: 100,
    },
    ic_passport_migration_department: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ic_passport_date_of_issue: {
      type: Date,
      required: false,
      unique: false,
    },
    ic_passport_division_code: {
      type: String,
      required: false,
      unique: false,
      maxlength: 100,
    },
    ic_birth_date: {
      type: Date,
      required: false,
      unique: false,
    },
    ic_birth_place: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ic_contractor_email: {
      type: String,
      required: false,
      unique: false,
      maxlength: 100,
    },
    ic_contractor_tel: {
      type: String,
      required: false,
      unique: false,
      maxlength: 100,
    },
    ic_int_passport_series: {
      type: String,
      required: false,
      unique: false,
      maxlength: 100,
    },
    ic_int_passport_number: {
      type: String,
      required: false,
      unique: false,
      maxlength: 100,
    },
    ic_int_passport_date_of_issue: {
      type: Date,
      required: false,
      unique: false,
    },
    ic_int_passport_migration_department: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ic_inn: {
      type: Number,
      required: false,
      unique: false,
      max: 100,
    },
    ic_snils: {
      type: Number,
      required: false,
      unique: false,
      max: 100,
    },
    ic_is_individual_entrepreneur: {
      type: Boolean,
      required: true,
      unique: false,
      default: false,
    },
    ic_is_bancruptcy_commissioner: {
      type: Boolean,
      required: true,
      unique: false,
      default: false,
    },
    ic_is_lawyer: {
      type: Boolean,
      required: true,
      unique: false,
      default: false,
    },

    // Entity Contractors Data

    ec_full_name: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ec_short_name: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ec_full_legal_form: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ec_short_legal_form: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ec_ogrn: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ec_ogrn_date: {
      type: Date,
      required: false,
      unique: false,
    },
    ec_full_name: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ec_inn: {
      type: Number,
      required: false,
      unique: false,
      max: 250,
    },
    ec_kpp: {
      type: Number,
      required: false,
      unique: false,
      max: 250,
    },
    ec_leg_adr_postal_code: {
      type: Number,
      required: false,
      unique: false,
      max: 250,
    },
    ec_leg_adr_region: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ec_leg_adr_disctrict: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ec_leg_adr_city: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ec_leg_adr_street: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ec_leg_adr_structure: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ec_leg_adr_office: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ec_ceo_post: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ec_ceo_surname: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ec_ceo_name: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    ec_ceo_patronymic: {
      type: String,
      required: false,
      unique: false,
      maxlength: 250,
    },
    is_deleted: {
      type: Boolean,
      required: false,
      unique: false,
      default: false,
    },
    deleted_at: {
      type: Date,
      required: false,
      unique: false,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contractor", ContractorSchema);

// min и max: задают минимальное и максимальное значения для числовых данных
// enum: строка должна представлять одно из значений в указанном массиве строк
// match: строка должна соответствовать регулярному выражению
