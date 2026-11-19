import{f as u}from"./core-n2KxEqLP.js";import{c as w,A as f,C as m,D as p,E as x,F as k,G as g,d as h,H as v,g as b}from"./adapt-my8LUyYB.js";import{a as c,r as j,e as S,b as n,j as _}from"./db-browser-BPnwPrjV.js";function O(t){const i=c("select user_id, status from programs where id = ?",t);if(!i||i.status!=="completed")return null;const o=i.user_id;if(c("select 1 from programs where user_id = ? and status in ('awaiting_review', 'active')",o))return null;const e=w(o);if(!e)return null;const s=y(o,t),d=f(o,t,e),a=m(o,p(e,{history:s,details:b(o),age:v(o),avatar:h(o),preferences:g(),hardToControl:k(o),heldAreas:x(o),volumeIncreases:d.targets}),null);return j(`update recommendations set status = 'superseded' where status = 'pending' and state != 'FLAG_FOR_COACH'
     and workout_id in (select id from workouts where program_id = ?)`,t),S(null,"program.next_block_drafted","program",a,{from:t,block:s.block,retired:s.retired,loads:s.loads,volume:d.targets,volumeReasons:d.decisions}),a}function y(t,i){const o=(c("select count(*) as n from programs where user_id = ?",t)?.n??1)+1,e=new Set;for(const r of n(`select v.exercise_id from prescription_versions v
     join prescription_versions next on next.slot_id = v.slot_id and next.version = v.version + 1
     join prescription_slots sl on sl.id = v.slot_id
     join session_blocks b on b.id = sl.block_id
     join program_sessions s on s.id = b.session_id
     where s.program_id = ? and next.exercise_id != v.exercise_id`,i))e.add(r.exercise_id);for(const r of n(`select v.exercise_id from prescription_slots sl
     join prescription_versions v on v.slot_id = sl.id and v.superseded_at is null
     join session_blocks b on b.id = sl.block_id
     join program_sessions s on s.id = b.session_id
     where s.program_id = ? and sl.archived_at is not null`,i))e.add(r.exercise_id);for(const r of n(`select ws.from_exercise_id from workout_substitutions ws
     join workout_exercises we on we.id = ws.workout_exercise_id
     join workouts w on w.id = we.workout_id
     where w.program_id = ? and w.status = 'completed' and w.context is null
     group by ws.from_exercise_id
     having count(*) >= 2 or sum(ws.reason = 'hurts') >= 1`,i))e.add(r.from_exercise_id);const s=_(c("select architecture from programs where id = ?",i)?.architecture??null)?.id??null,d=new Set,a=new Set;for(const r of n(`select r.exercise_id, r.decision, r.state from recommendations r join workouts w on w.id = r.workout_id
     where w.program_id = ? and r.status != 'superseded' order by w.completed_at desc, r.created_at desc`,i)){if(a.has(r.exercise_id))continue;a.add(r.exercise_id),(r.decision?r.decision==="KEEP"||r.decision==="PROGRESS":r.state==="PROGRESS"||r.state==="MAINTAIN")&&!e.has(r.exercise_id)&&d.add(r.exercise_id)}const l={};for(const r of n(`select s.name_key, v.exercise_id from prescription_versions v
     join prescription_slots sl on sl.id = v.slot_id join session_blocks b on b.id = sl.block_id
     join program_sessions s on s.id = b.session_id
     where s.program_id = ? and v.superseded_at is null and sl.archived_at is null`,i))(l[r.name_key]??=[]).push(r.exercise_id);return{block:o,retired:[...e],loads:{...E(t),...A(i)},architecture:s,working:[...d],byDay:l}}function A(t){const i={},o=new Set;for(const e of n(`select r.exercise_id, r.state, r.proposal from recommendations r join workouts w on w.id = r.workout_id
     where w.program_id = ? and r.status != 'superseded' order by w.completed_at desc, r.created_at desc`,t)){if(o.has(e.exercise_id))continue;o.add(e.exercise_id);const s=_(e.proposal);(e.state==="PROGRESS"||e.state==="REDUCE")&&s?.loadKg!=null&&!s.exerciseId&&(i[e.exercise_id]=s.loadKg)}return i}function E(t){const i=n(`select coalesce(ws.to_exercise_id, we.exercise_id) as exercise_id, we.id as workout_exercise_id, sl.load_kg
     from set_logs sl
     join workout_exercises we on we.id = sl.workout_exercise_id
     left join workout_substitutions ws on ws.workout_exercise_id = we.id
     join workouts w on w.id = we.workout_id
     where w.user_id = ? and w.status = 'completed' and sl.load_kg > 0
     order by w.completed_at desc`,t),o=new Map,e={};for(const s of i)u(s.exercise_id)?.measure==="load"&&(o.has(s.exercise_id)||o.set(s.exercise_id,s.workout_exercise_id),o.get(s.exercise_id)===s.workout_exercise_id&&(e[s.exercise_id]=Math.max(e[s.exercise_id]??0,s.load_kg)));return e}export{O as d};
