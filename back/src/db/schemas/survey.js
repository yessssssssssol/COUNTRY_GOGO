const { Schema, model } = require("mongoose");

/**
 * @swagger
 *  components:
 *    schemas:
 *      Survey:
 *        type: object
 *        required:
 *          - id
 *          - temp
 *          - answer
 *        properties:
 *          id:
 *            type: String
 *          temp:
 *            type: Number
 *            description: temperature
 *          answer:
 *            type: Array
 *            description: Array of survey result
 *        example:
 *           id: '6Ffds790H-hiOB8fdGd70F7sLg_dfFD90FI82'
 *           temp: 20
 *           answer: ["GDP", "HLE", "price", "Freedom"]
 */

const SurveySchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    temp: {
      type: Number,
      required: true,
    },
    answer: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SurveyModel = model("Survey", SurveySchema);

module.exports = { SurveyModel };
