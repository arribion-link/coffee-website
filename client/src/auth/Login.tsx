import { Link } from "react-router-dom";


const Login = () => {
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }
  return (
    <>
      <section className="min-h-[50vh] flex justify-center ">
        <form
          action=""
          onSubmit={handleSubmit}
          className="p-4 rounded shadow-xl bg-slate-200 mt-[3em] ">
          <h1 className="text-center font-bold text-amber-900">
            COFFEE POINT LOGIN
          </h1>
          <div className="mt-8">
            <label htmlFor="email">Email</label>
            <br />
            <input
                type="email"
                placeholder="email"
                className="focus:outline-none w-full border border-amber-900 rounded p-2"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password">Password</label>
            <br />
            <input
                type="password"
                placeholder="password"
                className="focus:outline-none w-full border border-amber-900 rounded p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-amber-900 hover:bg-amber-800 duration-100 text-white py-1 w-full rounded my-6">
            Submit
            </button>
            <hr className="my-4 text-slate-300" />
            <h1>Don't have an account? <Link to="/register" className="text-amber-900">Create one</Link></h1>
        </form>
      </section>
    </>
  );
}

export default Login
