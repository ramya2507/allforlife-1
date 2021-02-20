const createNotification = (id, db) =>{
  return db.query(`INSERT INTO notifications (job_proposal_id)
  VALUES($1) RETURNING*;`,[id])
  .then(res => res.rows[0])
  .catch(e => null)
}

module.exports = { createNotification }