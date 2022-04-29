const { Schema, model } = require("mongoose");

/**
 * @swagger
 *  components:
 *    schemas:
 *      Country:
 *        type: object
 *        required:
 *          - Country
 *          - City
 *          - Ab
 *          - price
 *          - score
 *          - GDP
 *          - socialSupport
 *          - HLE
 *          - Freedom
 *          - Generosity
 *          - corruption
 *
 *        properties:
 *          Country:
 *            type: String
 *            description: 국가명
 *          City:
 *            type: String
 *            description: 도시명
 *          Ab:
 *            type: String
 *            description: 약자
 *          price:
 *            type: Number
 *            description: 국가별 빅맥지수
 *          score:
 *            type: Number
 *            description: 국가별 행복지수
 *          GDP:
 *            type: Number
 *            description: 국가별 GDP
 *          socialSupport:
 *            type: Number
 *            description: 국가별 사회적 지원지수
 *          HLE:
 *            type: Number
 *            description: 국가별 기대수명
 *          Freedom:
 *            type: Number
 *            description: 국가별 삶의 자유도
 *          Generosity:
 *            type: Number
 *            description: 국가별 관대함
 *          corruption:
 *            type: Number
 *            description: 국가별 부패의 결여
 *        example:
 *           _id: "6268f9e0414ae765ad3379b1"
 *           City: "Fairbanks"
 *           Country: "US"
 *           Freedom: 0.837
 *           GDP: 11.023
 *           Generosity: 0.098
 *           HLE: 68.2
 *           corruption: 0.698
 *           price: 5.67
 *           score: 6.951
 *           socialSupport: 0.92
 */

const CountrySchema = new Schema(
  {
    Ab: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      required: true,
    },
    Country: {
      type: String,
      required: true,
    },
    Freedom: {
      type: Number,
      required: true,
    },
    Generosity: {
      type: Number,
      required: true,
    },
    HLE: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    GDP: {
      type: Number,
      required: true,
    },
    corruption: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    socialSupport: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CountryModel = model("Country", CountrySchema);

module.exports = { CountryModel };