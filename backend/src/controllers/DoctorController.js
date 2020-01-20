const Doctor = require("../models/Doctor");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  async index(req, res) {
    const crm = req.query.crm;
    const state = req.query.state;
    let filter = {};

    if (req.query.crm) filter.crm = crm;
    if (req.query.state) filter.state = state;

    try {
      const doctors = await Doctor.findAll({
        limit: 10,
        order: [["createdAt", "DESC"]],
        where: filter
      });

      return res.json(doctors);
    } catch (err) {
      return res.json({ error: err });
    }
  },

  async store(req, res) {
    try {
      const { specialty } = req.body;

      const doctor = await Doctor.create({
        ...req.body,
        specialty: specialty.toString()
      });

      return res.json(doctor);
    } catch (err) {
      return res.json({ error: err });
    }
  },

  async update(req, res) {
    try {
      const id = req.params.id;
      const { specialty } = req.body;

      await Doctor.update(
        { ...req.body, specialty: specialty.toString() },
        { where: { id } }
      );

      return res.json({ msg: "updated" });
    } catch (err) {
      return res.json({ error: err });
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params;
      await Doctor.destroy({ where: { id } });

      return res.json({ doctor: "deleted" });
    } catch (err) {
      return res.json({ error: err });
    }
  }
};
